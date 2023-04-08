import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import {Service} from "typedi";
@Service()
export default class EnvironmentService {
    public provideAll(environmentRepository: EnvironmentRepositoryInterface): Promise<Environment[]> {
        return environmentRepository.getAll()
    }

    public provideAllWithTips(environmentRepository: EnvironmentRepositoryInterface): Promise<Environment[]> {
        return environmentRepository.getAllWithTips()
    }
}
