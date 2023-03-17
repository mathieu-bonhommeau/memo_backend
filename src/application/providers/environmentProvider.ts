import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'

export default class EnvironmentProvider {
    public constructor(private environmentRepository: EnvironmentRepositoryInterface) {}

    public provideAll(): Promise<Environment[]> {
        return this.environmentRepository.getAll()
    }
}
