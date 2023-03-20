import TipRequestInput from '../../application/inputs/tipRequestInput'
import TipRepositoryPostgres from '../adapters/repositories/tipRepositoryPostgres'
import TipResponseOutput from '../../application/outputs/tipResponseOutput'
import TipProvider from '../../application/providers/tipProvider'
import TipAction from '../../application/actions/tipAction'
import TipExpressDTO from '../adapters/DTO/tipExpressDTO'

export default class TipController {
    public static async getAll(req: any, res: any) {
        // Si nécessaire mettre en place un DTO avec une interface (expressDTO implements DTOInterface)
        try {
            const tipRequestInput = new TipRequestInput(req.start, req.offset, req.order)
            const tipProvider = new TipProvider(new TipRepositoryPostgres())
            const response = await new TipResponseOutput(tipRequestInput, tipProvider).getAll()

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }
    public static async store(req: any, res: any) {
        try {
            const tip = new TipExpressDTO(req.body.command, req.body.description, req.body.environmentId).format()
            const tipAction = new TipAction(new TipRepositoryPostgres())
            const response = await tipAction.store(tip)

            if (response) {
                return res.status(201).json(response)
            }
        } catch (err) {
            return res.status(400).json({ message: 'Bad request' })
        }
    }
}
