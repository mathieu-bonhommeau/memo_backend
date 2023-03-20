import { Sequelize } from 'sequelize'
import SequelizeUtils from '../../../src/infrastructure/database/sequelizeUtils'
const request = require('supertest')
import { environmentsMocks } from '../../mocks/environments'
import EnvironmentSequelize from '../../../src/infrastructure/adapters/models/environment/environmentSequelize'
import { app } from '../../../src/app'

describe('Environment controller unit test', () => {
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

    beforeEach(async () => {
        await pg.close()
    })

    test('GET /environment', async () => {
        try {
            const response = await request(app).get('/environments')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(2)
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
