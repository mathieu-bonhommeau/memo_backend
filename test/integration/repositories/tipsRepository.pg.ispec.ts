import TipsRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/tipsRepositoryPostgres'
import {Sequelize} from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { tipsMocks } from '../../mocks/tips'
import TipsSequelize from "../../../src/infrastructure/adapters/models/tips/tipsSequelize";

describe('TipsRepositoryPostgres', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = new SequelizeUtils().connect()
        for (const tipsMock of tipsMocks) {
            await TipsSequelize.create({
                tips: tipsMock.tips,
                description: tipsMock.description,
                createdAt: tipsMock.createdAt,
                updatedAt: tipsMock.updatedAt
            })
        }
    })

    test('should return correct tips from postsgres', async () => {
        const tipsRepository = new TipsRepositoryPostgres()
        const tips = await tipsRepository.getAll()
        expect(tips).toEqual(tipsMocks)
    })
})
