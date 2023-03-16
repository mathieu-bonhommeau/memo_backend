import EnvironmentRepositoryInterface from "../../../domain/ports/repositories/environmentRepositoryInterface";
import Environment from "../../../domain/models/Environment";
import EnvironmentFactory from "../../../application/factories/environmentFactory";
import EnvironmentSequelize from "../models/environment/environmentSequelize";

export default class EnvironmentRepositoryPostgres implements EnvironmentRepositoryInterface {
    public async getAll(): Promise<Array<Environment>> {
        const environment = await EnvironmentSequelize.findAll()
        return environment.map((el) => EnvironmentFactory.create(el.name, el.details, el.createdAt, el.updatedAt))
    }
}
