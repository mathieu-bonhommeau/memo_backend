import EnvironmentRequestInput from '../../application/inputs/environmentRequestInput'
import EnvironmentProvider from '../../application/providers/environmentProvider'
import EnvironmentRepositoryPostgres from '../adapters/repositories/environmentRepositoryPostgres'
import EnvironmentResponseOutput from '../../application/outputs/environmentResponseOutput'

export default class EnvironmentController {
    public static async getAll(req: any, res: any) {
        // Si nécessaire mettre en place un DTO avec une interface (expressDTO implements DTOInterface)
        try {
            const environmentRequestInput = new EnvironmentRequestInput(req.start, req.offset, req.order)
            const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryPostgres())
            const response = await new EnvironmentResponseOutput(environmentRequestInput, environmentProvider).getAll()

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }
}
