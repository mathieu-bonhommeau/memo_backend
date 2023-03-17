import EnvironmentRepositoryInterface from '../../src/domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../src/domain/models/Environment'
import { environmentsMocks } from '../mocks/environments'

export default class EnvironmentRepositoryStub implements EnvironmentRepositoryInterface {
    async getAll(): Promise<Array<Environment>> {
        return environmentsMocks
    }
}
