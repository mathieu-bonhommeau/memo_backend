import EnvironmentRepositoryInterface from '../../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../../domain/models/Environment'
import EnvironmentFactory from '../../../application/factories/environmentFactory'
import EnvironmentSequelize from '../models/environment/environmentSequelize'
import EnvironmentSequelizeMapper from '../models/environment/environmentSequelizeMapper'
import SequelizeUtils from '../../database/sequelizeUtils'
import TipSequelize from '../models/tips/tipSequelize'
import EnvironmentWithTipsDTO from '../DTO/outputsDTO/EnvironmentWithTipsDTO'
import TipSequelizeMapper from '../models/tips/tipSequelizeMapper'
const db = SequelizeUtils.connect()

export default class EnvironmentRepositoryPostgres implements EnvironmentRepositoryInterface {
    public async getAll(): Promise<Array<Environment>> {
        const environment = await EnvironmentSequelize.findAll()
        return environment.map((el) =>
            EnvironmentFactory.create(el.id, el.name, el.details, el.createdAt, el.updatedAt),
        )
    }

    public async getAllWithTips(): Promise<Array<EnvironmentWithTipsDTO>> {
        const environment = await EnvironmentSequelize.findAll({
            include: {
                model: TipSequelize,
                as: 'tips',
            },
        })
        return environment.map((el) => {
            let mappedTips =
                el.tips?.map((tip) => {
                    return new TipSequelizeMapper(tip).syncToTip()
                }) || null
            return EnvironmentFactory.createWithTips(el.id, el.name, el.details, el.createdAt, el.updatedAt, mappedTips)
        })
    }

    public async store(environment: Environment): Promise<Environment> {
        const mapper = new EnvironmentSequelizeMapper(db, environment)
        return await mapper.syncToSequelize().save()
    }
}
