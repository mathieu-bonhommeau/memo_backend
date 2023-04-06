import SequelizeUtils from '../../../src/_common/pgUtils'
import { Sequelize } from 'sequelize'
import { app } from '../../../src/app'
import { tipsMocks } from '../../mocks/tips'
import TipSequelize from '../../../src/infrastructure/adapters/models/tips/tipSequelize'
import { environmentsMocks } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
const request = require('supertest')

describe('Tip controller test', () => {
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

    test('GET /Tips without queries for pagination', async () => {
        try {
            const response = await request(app).get('/tips')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(3)
        } catch (err) {
            throw err
        }
    })

    test('POST /tips', async () => {
        const response = await request(app).post('/tips').send({
            command: 'npm run start',
            description: 'Launch une app js',
            environmentId: 1,
        })
        expect(response.status).toBe(201)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toEqual(
            expect.objectContaining({
                command: 'npm run start',
                description: 'Launch une app js',
                environmentId: 1,
            }),
        )
    })

    test('POST /tips with an unknown environmentId', async () => {
        const response = await request(app).post('/tips').send({
            command: 'npm run start',
            description: 'Launch une app js',
            environmentId: 10,
        })
        expect(response.status).toBe(400)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toEqual({
            message: 'Bad request',
        })
    })
})
