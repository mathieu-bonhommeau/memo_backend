import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import {Inject, Service} from 'typedi'
import EnvironmentCreateRequest from '../requests/environment/environmentCreateRequest'
@Service()
export default class EnvironmentService {
    @Inject('EnvironmentRepositoryInterface') private environmentRepository: EnvironmentRepositoryInterface
    public provideAll(): Promise<Environment[]> {
        return this.environmentRepository.getAll()
    }

    public provideAllWithTips(): Promise<Environment[]> {
        return this.environmentRepository.getAllWithTips()
    }

    public store(environmentCreateRequest: EnvironmentCreateRequest,): Promise<Environment> {
        return this.environmentRepository.store(environmentCreateRequest)
    }
}
