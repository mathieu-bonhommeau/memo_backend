import PaginateResponse from './paginateResponse'
import RequestInput from '../inputs/requestInput'
import TipsProvider from "../actions/providers/tipsProvider";

export default class TipsResponseOutput {
    constructor(private input: RequestInput, private provider: TipsProvider) {}

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
