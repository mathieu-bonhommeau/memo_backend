import Tip from '../../domain/models/Tip'
import { Inject, Service } from 'typedi'
import TipCreateRequest from '../requests/tip/tipCreateRequest'
import TipRepositoryInterface from '../../domain/ports/repositories/tipRepositoryInterface'

@Service()
export default class TipService {
    @Inject('TipRepositoryInterface') private tipRepository: TipRepositoryInterface
    public provideAll(): Promise<Tip[]> {
        return this.tipRepository.getAll()
    }

    public store(tipCreateRequest: TipCreateRequest): Promise<Tip> {
        return this.tipRepository.store(tipCreateRequest)
    }
}
