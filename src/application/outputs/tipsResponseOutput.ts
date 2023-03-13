import PaginateResponse from './paginateResponse'
import RequestInput from '../inputs/requestInput'
import Provider from '../actions/providers/provider'
import RootModel from "../../domain/models/RootModel";

export default class TipsResponseOutput {
    constructor(private input: RequestInput, private provider: Provider) {}

    public getAll(): Promise<PaginateResponse | void> {
        return this.provider.provideAll()
            .then((tips) => {
                return new PaginateResponse(this.input, tips)
            })
            .catch((error) => {
                throw error
            })
    }
}
