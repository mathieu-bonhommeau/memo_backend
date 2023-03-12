import TipsRequestInput from '../../application/inputs/tipsRequestInput'
import TipsProvider from '../../application/actions/providers/tipsProvider'
import TipsRepositoryPostgres from '../adapters/repositories/tipsRepositoryPostgres'
import TipsResponseOutput from '../../application/outputs/tipsResponseOutput'
export default class TipsController {
    static async getAll(req: any, res: any): Promise<string> {
        // Si nécessaire mettre en place un DTO avec une interface (expressDTO implements DTOInterface)
        const tipsRequestInput = new TipsRequestInput(req.start, req.offset, req.order)
        const tipsProvider = new TipsProvider(new TipsRepositoryPostgres())
        const response = new TipsResponseOutput(tipsRequestInput, tipsProvider).getAll()
        return await res.status(200).send(await response.paginate())
    }
}
