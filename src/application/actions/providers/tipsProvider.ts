import Tips from '../../../domain/models/Tips'
import TipsRepositoryInterface from '../../../domain/ports/repositories/tipsRepositoryInterface'

export default class TipsProvider {
    constructor(private tipsRepository: TipsRepositoryInterface) {}

    public provideAll(): Promise<Tips[]> {
        return this.tipsRepository.getAll()
    }
}
