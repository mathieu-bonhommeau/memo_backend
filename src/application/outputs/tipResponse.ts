import PaginateResponse from './paginateResponse'
import RequestInput from '../../infrastructure/inputs/requestInput'
import TipProvider from '../providers/tipProvider'

export default class TipResponse {
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
