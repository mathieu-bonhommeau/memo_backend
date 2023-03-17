import EnvironmentRepositoryInterface from '../../src/domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../src/domain/models/Environment'
import {environmentsMock, environmentsMocks} from '../mocks/environments'
import EnvironmentDTOInterface from "../../src/application/DTO/environmentDTOInterface";
import EnvironmentFactory from "../../src/application/factories/environmentFactory";

export default class EnvironmentRepositoryStub implements EnvironmentRepositoryInterface {

    public async getAll(): Promise<Array<Environment>> {
        return environmentsMocks
    }

    public async store(environment: Environment): Promise<Environment> {
        return environment
    }
}
