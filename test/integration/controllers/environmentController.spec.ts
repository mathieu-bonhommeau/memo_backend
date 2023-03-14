import {Sequelize} from "sequelize";
import SequelizeUtils from "../../../src/infrastructure/database/sequelizeUtils";
const request = require('supertest')
import {app} from "../../../src";
import {environmentsMocks} from "../../mocks/environments";
import EnvironmentSequelize from "../../../src/infrastructure/adapters/models/environment/environmentSequelize";

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
                updatedAt: environmentsMock.updatedAt
            })
        }
    })

    test('GET /environment without queries for pagination', async () => {
        try {
            const response = await request(app)
                .get('/environment')
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toMatch(/json/)
            expect(response.body.data.length).toBe(2)
        } catch (err) {
            throw err
        }
    })
})
