import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import EnvironmentWithTipsDTO from '../../infrastructure/adapters/DTO/outputsDTO/EnvironmentWithTipsDTO'
import EnvironmentRepositoryPostgres from "../../infrastructure/adapters/repositories/environmentRepositoryPostgres";

export default class EnvironmentService {
    private environmentRepository: EnvironmentRepositoryInterface
    public constructor() {
        this.environmentRepository = new EnvironmentRepositoryPostgres()
    }

    public provideAll(): Promise<Environment[]> {
        return this.environmentRepository.getAll()
    }

    public provideAllWithTips(): Promise<EnvironmentWithTipsDTO[]> {
        return this.environmentRepository.getAllWithTips()
    }
}
