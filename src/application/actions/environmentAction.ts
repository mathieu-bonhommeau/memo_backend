import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'

export default class EnvironmentAction {
    constructor(private environmentRepository: EnvironmentRepositoryInterface) {}

    public store(environment: Environment): Promise<Environment> {
        return this.environmentRepository.store(environment)
    }
}
