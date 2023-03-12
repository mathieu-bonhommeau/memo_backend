import TipsRepositoryInterface from '../../../domain/ports/repositories/tipsRepositoryInterface'
import Tips from '../../../domain/models/Tips'
import TipsFactory from '../../../application/factories/tipsFactory'
import TipsSequelize from '../models/tips/tipsSequelize'
import { Sequelize } from 'sequelize'

export default class TipsRepositoryPostgres implements TipsRepositoryInterface {
    async getAll(): Promise<Array<Tips>> {
        const tips = await TipsSequelize.findAll()
        return tips.map((el) => TipsFactory.create(el.tips, el.description, el.createdAt, el.updatedAt))
    }
}
