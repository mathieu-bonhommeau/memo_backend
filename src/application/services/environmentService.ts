import EnvironmentRepositoryInterface from '../../domain/ports/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import {Service} from "typedi";
import EnvironmentCreateRequestDTO from "../DTO/environment/environmentCreateRequestDTO";
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
        environmentCreateRequestDTO: EnvironmentCreateRequestDTO
    ): Promise<Environment> {
        return environmentRepository.store(environmentCreateRequestDTO)
    }
}
