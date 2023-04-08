import EnvironmentRepositoryInterface from '../../src/domain/ports/environmentRepositoryInterface'
import Environment from '../../src/domain/models/Environment'
import { environmentsMocks, environmentsMocksWithTips } from '../mocks/environments'
import EnvironmentWithTipsDTO from '../../src/infrastructure/adapters/DTO/outputsDTO/EnvironmentWithTipsDTO'

export default class EnvironmentRepositoryStub implements EnvironmentRepositoryInterface {
    public async getAll(): Promise<Array<Environment>> {
        return environmentsMocks
    }
    public async getAllWithTips(): Promise<Array<EnvironmentWithTipsDTO>> {
        return environmentsMocksWithTips
    }
    public async store(environment: Environment): Promise<Environment> {
        return environment
    }
}
