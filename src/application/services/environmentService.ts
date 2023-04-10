import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import { Service } from 'typedi'
import EnvironmentCreateRequest from '../requests/environment/environmentCreateRequest'
@Service()
export default class EnvironmentService {
    public provideAll(environmentRepository: EnvironmentRepositoryInterface): Promise<Environment[]> {
        return environmentRepository.getAll()
    }

    public provideAllWithTips(environmentRepository: EnvironmentRepositoryInterface): Promise<Environment[]> {
        return environmentRepository.getAllWithTips()
    }

    public store(
        environmentRepository: EnvironmentRepositoryInterface,
        environmentCreateRequest: EnvironmentCreateRequest,
    ): Promise<Environment> {
        return environmentRepository.store(environmentCreateRequest)
    }
}
