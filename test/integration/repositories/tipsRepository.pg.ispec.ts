import TipsRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/tipsRepositoryPostgres'
import TipsFactory from '../../../src/application/factories/tipsFactory'
import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import {tipsMocks} from "../../mocks/tips";

describe('TipsRepositoryPostgres', () => {
    let connection: Sequelize

    beforeEach(async () => {
        connection = new SequelizeUtils().connect()
        //await pg`insert from tips ${pg(tipsMocks)}`
    })

    test('should return correct tips from postsgres', async () => {
        const tipsRepository = new TipsRepositoryPostgres(connection)
        const tips = await tipsRepository.getAll()
        expect(tips).toEqual(tipsMocks)
    })
})
