import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { environmentsMock, environmentsMocks } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
import EnvironmentRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/environmentRepositoryPostgres'

describe('EnvironmentRepositoryPostgres', () => {
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
    })

    test('should return correct Environment from postsgres', async () => {
        const environmentRepository = new EnvironmentRepositoryPostgres()
        const environments = await environmentRepository.getAll()
        expect(environments).toEqual(environmentsMocks)
    })

    test('should create a new environment and return it with its id', async () => {
        const environmentRepository = new EnvironmentRepositoryPostgres()
        const environment = await environmentRepository.store(environmentsMock)
        expect(environment).toEqual(
            expect.objectContaining({
                name: 'Git',
                details: 'Logiciel de controle de version',
            }),
        )
    })
})
