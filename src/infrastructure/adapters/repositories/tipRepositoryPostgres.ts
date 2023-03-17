import TipRepositoryInterface from '../../../domain/ports/repositories/tipRepositoryInterface'
import Tip from '../../../domain/models/Tip'
import TipSequelize from '../models/tips/tipSequelize'
import TipFactory from '../../../application/factories/tipFactory'

export default class TipRepositoryPostgres implements TipRepositoryInterface {
    public async getAll(): Promise<Array<Tip>> {
        const tips = await TipSequelize.findAll()
        return tips.map((el: TipSequelize) => {
            return TipFactory.create(el.command, el.description, el.environmentId, el.createdAt, el.updatedAt)
        })
    }
}
