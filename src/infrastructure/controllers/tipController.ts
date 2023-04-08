import TipRequestInput from '../../application/inputs/tipRequestInput'
import TipRepositoryPostgres from '../adapters/tipRepositoryPostgres'
import TipResponse from '../../application/responses/tipResponse'
import TipProvider from '../../application/services/tipProvider'
import TipAction from '../../application/actions/tipAction'
import TipExpressDTO from '../adapters/DTO/inputsDTO/tipExpressDTO'

export default class TipController {
    public static async getAll(req: any, res: any) {
        try {
            const tipRequestInput = new TipRequestInput(req.start, req.offset, req.order)
            const tipProvider = new TipProvider(new TipRepositoryPostgres())
            const response = await new TipResponse(tipRequestInput, tipProvider).getAll()

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
