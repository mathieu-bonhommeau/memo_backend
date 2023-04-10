import Tip from '../../domain/models/Tip'
import TipRepositoryInterface from '../../domain/ports/repositories/tipRepositoryInterface'
import { Service } from 'typedi'
import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import EnvironmentCreateRequest from '../requests/environment/environmentCreateRequest'
import TipCreateRequest from '../requests/tip/tipCreateRequest'

@Service()
export default class TipService {

    public provideAll(tipRepository: TipRepositoryInterface): Promise<Tip[]> {
        return tipRepository.getAll()
    }

    public store(tipRepository: TipRepositoryInterface, tipCreateRequest: TipCreateRequest): Promise<Tip> {
        return tipRepository.store(tipCreateRequest)
    }
}
