import TipsRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/tipsRepositoryPostgres'
import {Sequelize} from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { environmentsMocks } from '../../mocks/environments'
import EnvironmentSequelize from "../../../src/infrastructure/adapters/models/environment/environmentSequelize";
import EnvironmentRepositoryPostgres
    from "../../../src/infrastructure/adapters/repositories/environmentRepositoryPostgres";

describe('TipsRepositoryPostgres', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = SequelizeUtils.connect()
        await SequelizeUtils.truncate(pg)
        for (const environmentsMock of environmentsMocks) {
            await EnvironmentSequelize.create({
                name: environmentsMock.name,
                details: environmentsMock.details,
                createdAt: environmentsMock.createdAt,
                updatedAt: environmentsMock.updatedAt
            })
        }
    })

    test('should return correct tips from postsgres', async () => {
        const environmentRepository = new EnvironmentRepositoryPostgres()
        const environments = await environmentRepository.getAll()
        expect(environments).toEqual(environmentsMocks)
    })
})
