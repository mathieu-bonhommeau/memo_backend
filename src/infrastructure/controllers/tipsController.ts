import TipsRepositoryMock from "../../../test/mocks/tipsRepositoryMock";
import TipsRepositoryInterface from "../../domain/ports/repositories/tipsRepositoryInterface";
import TipsRequestInput from "../../application/inputs/tipsRequestInput";
import TipsProvider from "../../application/actions/providers/tipsProvider";
import TipsRepositoryPostgres from "../adapters/repositories/tipsRepositoryPostgres";
import TipsResponseOutput from "../../application/outputs/tipsResponseOutput";

export default class TipsController {
    static async getAll(req, res): Promise<Response> {
        const tipsRequestInput = new TipsRequestInput(req.start, req.offset, req.order)
        // la request input est utile ici pour renvoyé une reponse paginée (il faut créer un object Pagination)
        const tipsProvider = new TipsProvider(tipsRequestInput)
        const tipsResponseOutput = new TipsResponseOutput(await tipsProvider.provideAll(new TipsRepositoryPostgres()))
        return await res.status(200).send(tipsResponseOutput.getData())
    }
}
