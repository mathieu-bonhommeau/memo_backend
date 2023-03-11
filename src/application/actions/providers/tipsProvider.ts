import TipsRequestInput from "../../inputs/tipsRequestInput";
import Tips from "../../../domain/models/Tips";
import TipsRepositoryInterface from "../../../domain/ports/repositories/tipsRepositoryInterface";

export default class TipsProvider {
    constructor(public requestInput: TipsRequestInput) {}

    async provideAll(tipsRepository: TipsRepositoryInterface ): Promise<Tips[]> {
        return await tipsRepository.getAll()
    }
}