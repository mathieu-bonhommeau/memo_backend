export default class TipsController {
    static async getAll(req, res): Promise<Response> {
        return await res.status(200).send("getAll response")
    }
}