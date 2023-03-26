import Tip from '../../domain/models/Tip'
import TipRepositoryInterface from '../../domain/ports/repositories/tipRepositoryInterface'

export default class TipAction {
    constructor(private tipRepository: TipRepositoryInterface) {}

    public store(tip: Tip): Promise<Tip> {
        return this.tipRepository.store(tip)
    }
}
