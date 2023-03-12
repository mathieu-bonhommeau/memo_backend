import TipsController from '../../../src/infrastructure/controllers/tipsController'

describe('Tips controller unit test', () => {
    const req = {
        start: 0,
        offset: 0,
        order: 'desc',
    }
    const res: object = {
        send: jest.fn((): object => res),
        status: jest.fn((): object => res),
    }

    afterEach(() => jest.clearAllMocks())

    test('return a response 200', async () => {
        await TipsController.getAll(req, res)
        expect(res.status).toBeCalledWith(200)
    })

    test('return an array of tips in json with pagination', async () => {
        //await TipsController.getAll(req, res)
    })
})
