import EnvironmentRequestInput from '../../application/inputs/environmentRequestInput'
import EnvironmentProvider from '../../application/providers/environmentProvider'
import EnvironmentRepositoryPostgres from '../adapters/repositories/environmentRepositoryPostgres'
import EnvironmentResponse from '../../application/outputs/environmentResponse'
import EnvironmentExpressDTO from '../adapters/DTO/inputsDTO/environmentExpressDTO'
import EnvironmentAction from '../../application/actions/environmentAction'

export default class EnvironmentController {
    public static async getAll(req: any, res: any) {
        try {
            const environmentRequestInput = new EnvironmentRequestInput(req.start, req.offset, req.order)
            const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryPostgres())
            const response = await new EnvironmentResponse(environmentRequestInput, environmentProvider).getAll()

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }

    public static async getAllWithTips(req: any, res: any) {
        try {
            const environmentRequestInput = new EnvironmentRequestInput(req.start, req.offset, req.order)
            const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryPostgres())
            const response = await new EnvironmentResponse(
                environmentRequestInput,
                environmentProvider,
            ).getAllWithTips()

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
