import TipRepositoryInterface from '../../../domain/ports/repositories/tipRepositoryInterface'
import Tip from '../../../domain/models/Tip'
import TipSequelize from '../models/tips/tipSequelize'
import TipFactory from '../../../application/factories/tipFactory'
import TipSequelizeMapper from '../models/tips/tipSequelizeMapper'

export default class TipRepositoryPostgres implements TipRepositoryInterface {
    public async getAll(): Promise<Array<Tip>> {
        const tips = await TipSequelize.findAll()
        return tips.map((el: TipSequelize) => {
            return TipFactory.create(el.id, el.command, el.description, el.environmentId, el.createdAt, el.updatedAt)
        })
    }

    public async store(tip: Tip): Promise<Tip> {
        const mapper = new TipSequelizeMapper(tip)
        return await mapper.syncToSequelize().save()
    }
}
