import SequelizeUtils from "../../../src/infrastructure/database/sequelizeUtils";
import {tipsMocks} from "../../mocks/tips";
import TipsSequelize from "../../../src/infrastructure/adapters/models/tips/tipsSequelize";
import {Sequelize} from "sequelize";
import {app} from "../../../src/app";
const request = require('supertest')

describe('Tips controller test', () => {
    let pg: Sequelize

    beforeEach(async () => {
        pg = SequelizeUtils.connect()
        await SequelizeUtils.truncate(pg)
        for (const tipsMock of tipsMocks) {
            await TipsSequelize.create({
                tips: tipsMock.tips,
                description: tipsMock.description,
                createdAt: tipsMock.createdAt,
                updatedAt: tipsMock.updatedAt
            })
        }
    })

    beforeEach(async () => {
        await pg.close()
    })

    test('GET /tips without queries for pagination', async () => {
        try {
            const response = await request(app)
                .get('/tips')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(3)
        } catch (err) {
            throw err
        }
    })
})
