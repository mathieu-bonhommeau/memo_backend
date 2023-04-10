import EnvironmentService from '../../application/services/environmentService'
import EnvironmentsRequest from '../../application/requests/environment/environmentsRequest'
import { Service } from 'typedi'
import Environment from '../../domain/models/Environment'
import PaginateResponse from '../../application/responses/paginateResponse'
import EnvironmentsResponse from '../../application/responses/environment/environmentsResponse'
import EnvironmentCreateRequest from '../../application/requests/environment/environmentCreateRequest'
import ActionResponse from '../../application/responses/actionResponse'

@Service()
export default class EnvironmentController {
    constructor(private environmentService: EnvironmentService) {}
    public async getAll(req, res) {
        try {
            const environmentsRequest: EnvironmentsRequest = EnvironmentsRequest.buildWithParams(req.params)
            const environments: Environment[] = await this.environmentService.provideAll()
            const response: PaginateResponse = new EnvironmentsResponse().buildWithPagination(
                environmentsRequest,
                environments,
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
            const environmentsRequest: EnvironmentsRequest = EnvironmentsRequest.buildWithParams(req.params)
            const environments: Environment[] = await this.environmentService.provideAllWithTips()
            console.log(environments)
            const response: PaginateResponse = new EnvironmentsResponse().buildWithPagination(
                environmentsRequest,
                environments,
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
            const environmentCreateRequest: EnvironmentCreateRequest = EnvironmentCreateRequest.buildWithBody(req.body)
            const newEnvironment: Environment = await this.environmentService.store(environmentCreateRequest)
            const response: ActionResponse = new EnvironmentsResponse().buildForCreation(newEnvironment)

            if (response) {
                return res.status(201).json(response)
            }
        } catch (err) {
            console.error(err)
            return res.status(400).json({ message: 'Bad request' })
        }
    }
}
