import TipsController from "../../src/infrastructure/controllers/tipsController";

describe('Tips unit test', () => {
    test('return a response 200 with a tips in json format', async () => {
        const req = {params: {id: 10}}
        const res = {
            send: jest.fn(() => res),
            status: jest.fn(() => res),
        }
        const data = await TipsController.getAll(req, res)
        expect(res.send).toBeCalledWith("getAll response")
        expect(res.status).toBeCalledWith(200)
    })
})
