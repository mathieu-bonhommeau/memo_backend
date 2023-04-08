import EnvironmentRepositoryPostgres from '../adapters/environmentRepositoryPostgres'
import EnvironmentResponse from '../../application/responses/environment/environmentResponse'
import EnvironmentService from "../../application/services/environmentService";
import EnvironmentsRequestDTO from "../../application/DTO/environment/environmentsRequestDTO";
import {Container, Inject, Service} from "typedi";
import EnvironmentCreateRequestDTO from "../../application/DTO/environment/environmentCreateRequestDTO";
import Environment from "../../domain/models/Environment";

@Service()
export default class EnvironmentController {
    constructor(
        @Inject()
        private environmentService: EnvironmentService
    ) {}
    public async getAll(req, res) {
        try {
            const environmentsRequestDTO: EnvironmentsRequestDTO = EnvironmentsRequestDTO.buildWithParams(req.params)
            const environments = await this.environmentService.provideAll(Container.get(EnvironmentRepositoryPostgres))
            const response = EnvironmentResponse.buildWithPagination(
                environmentsRequestDTO, environments
            )

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
            return res.status(400).json({ message: 'Bad request' })
        }
    }

    public async getAllWithTips(req, res) {
        try {
            const environmentsRequestDTO:EnvironmentsRequestDTO = EnvironmentsRequestDTO.buildWithParams(req.params)
            const environments = await this.environmentService.provideAllWithTips(Container.get(EnvironmentRepositoryPostgres))
            const response = EnvironmentResponse.buildWithPagination(
                environmentsRequestDTO, environments
            )

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
            return res.status(400).json({ message: 'Bad request' })
        }
    }

    public async store(req, res) {
        try {
            const environmentCreateRequestDTO:EnvironmentCreateRequestDTO = EnvironmentCreateRequestDTO.buildWithBody(req.body)
            const newEnvironment: Environment = await this.environmentService.store(
                Container.get(EnvironmentRepositoryPostgres),
                environmentCreateRequestDTO
            )
            const response = EnvironmentResponse.buildForCreation(newEnvironment)

            if (response) {
                return res.status(201).json(response)
            }
        } catch (err) {
            console.error(err)
            return res.status(400).json({ message: 'Bad request' })
        }
    }
}
