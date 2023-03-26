import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
import { environmentsMock, environmentsMocks, environmentsMocksWithTips } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
import EnvironmentRepositoryPostgres from '../../../src/infrastructure/adapters/repositories/environmentRepositoryPostgres'
import { tipsMocksLinksToEnvironment } from '../../mocks/tips'
import TipSequelize from '../../../src/infrastructure/adapters/models/tips/tipSequelize'

describe('EnvironmentRepositoryPostgres', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = SequelizeUtils.connect()
        await SequelizeUtils.truncate(pg)
    })

    test('should return correct Environment from postsgres', async () => {
        for (const environmentsMock of environmentsMocks) {
            await EnvironmentSequelize.create({
                name: environmentsMock.name,
                details: environmentsMock.details,
                createdAt: environmentsMock.createdAt,
                updatedAt: environmentsMock.updatedAt,
            })
        }
        const environmentRepository = new EnvironmentRepositoryPostgres()
        const environments = await environmentRepository.getAll()
        expect(environments).toEqual(environmentsMocks)
    })

    test('should return correct Environment from postsgres with associatedTips', async () => {
        for (const environmentsMock of environmentsMocksWithTips) {
            await EnvironmentSequelize.create({
                name: environmentsMock.name,
                details: environmentsMock.details,
                createdAt: environmentsMock.createdAt,
                updatedAt: environmentsMock.updatedAt,
            })
        }

        for (const tipsMock of tipsMocksLinksToEnvironment) {
            await TipSequelize.create({
                command: tipsMock.command,
                description: tipsMock.description,
                environmentId: tipsMock.environmentId,
                createdAt: tipsMock.createdAt,
                updatedAt: tipsMock.updatedAt,
            })
        }

        const environmentRepository = new EnvironmentRepositoryPostgres()
        const environments = await environmentRepository.getAllWithTips()
        console.log(environments)
        expect(environments).toEqual(environmentsMocksWithTips)
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
