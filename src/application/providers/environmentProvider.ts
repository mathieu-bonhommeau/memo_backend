import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import EnvironmentWithTipsDTO from '../../infrastructure/adapters/DTO/outputsDTO/EnvironmentWithTipsDTO'

export default class EnvironmentProvider {
    public constructor(private environmentRepository: EnvironmentRepositoryInterface) {}

    public provideAll(): Promise<Environment[]> {
        return this.environmentRepository.getAll()
    }

    public provideAllWithTips(): Promise<EnvironmentWithTipsDTO[]> {
        return this.environmentRepository.getAllWithTips()
    }
}
