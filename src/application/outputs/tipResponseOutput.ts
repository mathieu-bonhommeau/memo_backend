import PaginateResponse from './paginateResponse'
import RequestInput from '../inputs/requestInput'
import TipProvider from '../actions/providers/tipProvider'

export default class TipResponseOutput {
    constructor(private input: RequestInput, private provider: TipProvider) {}

    public getAll(): Promise<PaginateResponse | void> {
        return this.provider
            .provideAll()
            .then((tips) => {
                return new PaginateResponse(this.input, tips)
            })
            .catch((error) => {
                throw error
            })
    }
}
