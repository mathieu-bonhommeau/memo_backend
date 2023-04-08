import EnvironmentRepositoryPostgres from '../adapters/repositories/environmentRepositoryPostgres'
import EnvironmentResponse from '../../application/responses/environmentResponse'
import EnvironmentExpressDTO from '../adapters/DTO/inputsDTO/environmentExpressDTO'
import EnvironmentAction from '../../application/actions/environmentAction'
import EnvironmentService from "../../application/services/environmentService";
import EnvironmentsRequestDTO from "../../application/DTO/environment/environmentsPaginatedRequestDTO";
import {Container, Inject, Service} from "typedi";

@Service()
export default class EnvironmentController {
    constructor(
        @Inject()
        private environmentService: EnvironmentService
    ) {}
    public async getAll(req, res) {
        try {
            const environmentsRequestDTO:EnvironmentsRequestDTO = EnvironmentsRequestDTO.buildFromRequest(req.params)
            const environments = await this.environmentService.provideAll(Container.get(EnvironmentRepositoryPostgres))
            const response = EnvironmentResponse.buildWithPagination(
                environmentsRequestDTO, environments
            )

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
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
        }
    }

    public static async store(req, res) {
        try {
            const environment = new EnvironmentExpressDTO(req.body.name, req.body.details).format()
            const environmentAction = new EnvironmentAction(new EnvironmentRepositoryPostgres())
            const response = await environmentAction.store(environment)

            if (response) {
                return res.status(201).json(response)
            }
        } catch (err) {
            return res.status(400).json({ message: 'Bad request' })
        }
    }
}
