import PaginateResponse from './paginateResponse'
import RequestInput from '../inputs/requestInput'
import Provider from '../actions/providers/provider'

export default class TipsResponseOutput {
    constructor(private input: RequestInput, private provider: Provider) {}

    getAll(): PaginateResponse {
        return new PaginateResponse(this.input, this.provider.provideAll())
    }
}
