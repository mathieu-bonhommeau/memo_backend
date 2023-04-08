import Environment from '../models/Environment'
import EnvironmentWithTipsDTO from '../../../infrastructure/adapters/DTO/outputsDTO/EnvironmentWithTipsDTO'

export default interface EnvironmentRepositoryInterface {
    getAll(): Promise<Environment[]>
    getAllWithTips(): Promise<Environment[]>
    store(environment: Environment): Promise<Environment>
}
