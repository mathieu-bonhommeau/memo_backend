import TipsRequestInput from '../../inputs/tipsRequestInput'
import Tips from '../../../domain/models/Tips'
import TipsRepositoryInterface from '../../../domain/ports/repositories/tipsRepositoryInterface'
import Provider from './provider'

export default class TipsProvider extends Provider {
        constructor(tipsRepository: TipsRepositoryInterface) {
        super(tipsRepository)
    }

    async provideAll(): Promise<Tips[]> {
        return await this.tipsRepository.getAll()
    }
}
