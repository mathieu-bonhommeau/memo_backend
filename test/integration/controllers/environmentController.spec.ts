import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
const request = require('supertest')
import { environmentsMocks, environmentsMocksWithTips } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
import { app } from '../../../src/app'
import { tipsMocksLinksToEnvironment } from '../../mocks/tips'
import TipSequelize from '../../../src/infrastructure/adapters/models/tips/tipSequelize'

describe('Environment controller unit test', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = SequelizeUtils.connect()
        await SequelizeUtils.truncate(pg)
    })

    beforeEach(async () => {
        await pg.close()
    })

    test('GET /environments', async () => {
        for (const environmentsMock of environmentsMocks) {
            await EnvironmentSequelize.create({
                name: environmentsMock.name,
                details: environmentsMock.details,
                createdAt: environmentsMock.createdAt,
                updatedAt: environmentsMock.updatedAt,
            })
        }
        try {
            const response = await request(app).get('/environments')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(2)
        } catch (err) {
            throw err
        }
    })

    test('GET /environments-tips', async () => {
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
        try {
            const response = await request(app).get('/environments-tips')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(1)
        } catch (err) {
            throw err
        }
    })

    test('POST /environment', async () => {
        const response = await request(app).post('/environments').send({
            name: 'Sequelize',
            details: 'Bdd pour express js',
        })
        expect(response.status).toBe(201)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toEqual(
            expect.objectContaining({
                name: 'Sequelize',
                details: 'Bdd pour express js',
            }),
        )
    })
})
