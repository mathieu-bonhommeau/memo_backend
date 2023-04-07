import EnvironmentRequestInput from '../inputs/environmentRequestInput'
import EnvironmentProvider from '../../application/services/environmentService'
import EnvironmentRepositoryPostgres from '../adapters/repositories/environmentRepositoryPostgres'
import EnvironmentResponse from '../../application/responses/environmentResponse'
import EnvironmentExpressDTO from '../adapters/DTO/inputsDTO/environmentExpressDTO'
import EnvironmentAction from '../../application/actions/environmentAction'
import EnvironmentRepositoryInterface from "../../domain/ports/repositories/environmentRepositoryInterface";
import EnvironmentService from "../../application/services/environmentService";
import PaginatedRequestDTO from "../../application/DTO/paginatedRequestDTO";

export default class EnvironmentController {
    private readonly environmentService: EnvironmentService
    constructor() {
        // change this in DI with only interface
        this.environmentService = new EnvironmentService()
    }
    public async getAll(req: any, res: any) {
        try {
            const environmentRequest:EnvironmentRequestDTO = EnvironmentRequestDTO.buildFromRequest(req.params)
            const response = EnvironmentResponse.getAll(
                paginatedRequest, this.environmentService
            )

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }

    public static async getAllWithTips(req: any, res: any) {
        try {
            const paginatedRequest:PaginatedRequestDTO = PaginatedRequestDTO.buildFromRequest(req.params)
            const response = EnvironmentResponse.getAllWithTips(paginatedRequest, this.environmentService)

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }

    public static async store(req: any, res: any) {
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
