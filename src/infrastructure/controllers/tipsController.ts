export default class TipsController {
    static async getAll(req, res): Promise<Response> {
        const data = { test: 'test' }
        return await res.status(200).send(data)
    }
}
