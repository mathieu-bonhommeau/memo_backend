import EnvironmentRepositoryInterface from '../../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../../domain/models/Environment'
import EnvironmentFactory from '../../../application/factories/environmentFactory'
import EnvironmentSequelize from '../models/environment/environmentSequelize'
import EnvironmentSequelizeMapper from '../models/environment/environmentSequelizeMapper'
import SequelizeUtils from '../../database/sequelizeUtils'
const db = SequelizeUtils.connect()

export default class EnvironmentRepositoryPostgres implements EnvironmentRepositoryInterface {
    public async getAll(): Promise<Array<Environment>> {
        const environment = await EnvironmentSequelize.findAll()
        return environment.map((el) =>
            EnvironmentFactory.create(el.id, el.name, el.details, el.createdAt, el.updatedAt),
        )
    }

    public async store(environment: Environment): Promise<Environment> {
        const mapper = new EnvironmentSequelizeMapper(db, environment)
        return await mapper.synchronize().save()
    }
}
