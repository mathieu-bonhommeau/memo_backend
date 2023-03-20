import EnvironmentRequestInput from '../../application/inputs/environmentRequestInput'
import EnvironmentProvider from '../../application/providers/environmentProvider'
import EnvironmentRepositoryPostgres from '../adapters/repositories/environmentRepositoryPostgres'
import EnvironmentResponseOutput from '../../application/outputs/environmentResponseOutput'
import EnvironmentExpressDTO from "../adapters/DTO/environmentExpressDTO";
import EnvironmentAction from "../../application/actions/environmentAction";

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

    public static async store(req: any, res: any) {
        try {
            console.log('req', req.body)
            const environment = new EnvironmentExpressDTO(req.body.name, req.body.details).format()
            console.log(environment)
            const environmentAction = new EnvironmentAction(new EnvironmentRepositoryPostgres())
            const response = await environmentAction.store(environment)

            if (response) {
                return res.status(201).json(response)
            }

        } catch (err) {
            console.error(err)
        }
    }
}
