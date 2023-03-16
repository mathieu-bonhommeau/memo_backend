import TipsRequestInput from '../../application/inputs/tipsRequestInput'
import TipsProvider from '../../application/actions/providers/tipsProvider'
import TipsRepositoryPostgres from '../adapters/repositories/tipsRepositoryPostgres'
import TipsResponseOutput from '../../application/outputs/tipsResponseOutput'
export default class TipsController {
    public static async getAll(req: any, res: any) {
        // Si nécessaire mettre en place un DTO avec une interface (expressDTO implements DTOInterface)
        try {
            const tipsRequestInput = new TipsRequestInput(req.start, req.offset, req.order)
            const tipsProvider = new TipsProvider(new TipsRepositoryPostgres())
            const response = await new TipsResponseOutput(tipsRequestInput, tipsProvider).getAll()

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }
}
