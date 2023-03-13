import { app } from '../../../src'
const request = require('supertest')

describe('Tips controller test', () => {

    //beforeEach(() => )

    test('GET /tips', async () => {
        try {
            const response = await request(app, { http2: true })
                .get('/tips')
            expect(response.status).toBe(200)
        } catch (err) {
            throw err
        }


    })
})
