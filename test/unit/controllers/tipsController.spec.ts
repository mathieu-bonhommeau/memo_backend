import TipsController from '../../../src/infrastructure/controllers/tipsController'

describe('Tips controller unit test', () => {
    const req = {}
    const res = {
        send: jest.fn(() => res),
        status: jest.fn(() => res),
    }

    afterEach(() => jest.clearAllMocks())

    test('return a response 200', async () => {
        await TipsController.getAll(req, res)
        expect(res.send).toBeCalledWith({ test: 'test' })
        expect(res.status).toBeCalledWith(200)
    })
})
