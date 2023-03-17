import Tip from '../../../domain/models/Tip'
import TipRepositoryInterface from '../../../domain/ports/repositories/tipRepositoryInterface'

export default class TipProvider {
    constructor(private TipRepository: TipRepositoryInterface) {}

    public provideAll(): Promise<Tip[]> {
        return this.TipRepository.getAll()
    }
}
