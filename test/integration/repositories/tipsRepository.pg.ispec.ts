import TipsRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/tipsRepositoryPostgres'
import TipsFactory from '../../../src/application/factories/tipsFactory'
import {CreationAttributes, Sequelize} from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { tipsMocks } from '../../mocks/tips'
import TipsSequelize from "../../../src/infrastructure/adapters/models/tips/tipsSequelize";

describe('TipsRepositoryPostgres', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = new SequelizeUtils().connect()
        tipsMocks.forEach(tips => {
            return TipsSequelize.create({
                tips: tips.tips,
                description: tips.description,
                createdAt: tips.createdAt,
                updatedAt: tips.updatedAt
            })
        })
    })

    test('should return correct tips from postsgres', async () => {
        const tipsRepository = new TipsRepositoryPostgres()
        const tips = await tipsRepository.getAll()
        expect(tips).toEqual(tipsMocks)
    })
})
