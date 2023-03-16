import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { tipsMocks } from '../../mocks/tips'
import TipSequelize from '../../../src/infrastructure/adapters/models/tips/tipSequelize'
import { environmentsMocks } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
import TipRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/tipRepositoryPostgres'

describe('TipRepositoryPostgres', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = SequelizeUtils.connect()
        await SequelizeUtils.truncate(pg)
        for (const environmentsMock of environmentsMocks) {
            await EnvironmentSequelize.create({
                name: environmentsMock.name,
                details: environmentsMock.details,
                createdAt: environmentsMock.createdAt,
                updatedAt: environmentsMock.updatedAt,
            })
        }
        for (const tipsMock of tipsMocks) {
            await TipSequelize.create({
                command: tipsMock.command,
                description: tipsMock.description,
                environmentId: tipsMock.environmentId,
                createdAt: tipsMock.createdAt,
                updatedAt: tipsMock.updatedAt,
            })
        }
    })

    beforeEach(async () => {
        await pg.close()
    })

    test('should return correct Tips from postsgres', async () => {
        const tipRepository = new TipRepositoryPostgres()
        const tips = await tipRepository.getAll()
        expect(tips).toEqual(tipsMocks)
    })
})
