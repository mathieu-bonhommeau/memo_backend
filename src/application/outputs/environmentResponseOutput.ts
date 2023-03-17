import PaginateResponse from './paginateResponse'
import RequestInput from '../inputs/requestInput'
import EnvironmentProvider from '../providers/environmentProvider'

export default class EnvironmentResponseOutput {
    constructor(private input: RequestInput, private provider: EnvironmentProvider) {}

    public getAll(): Promise<PaginateResponse | void> {
        return this.provider
            .provideAll()
            .then((environment) => {
                return new PaginateResponse(this.input, environment)
            })
            .catch((error) => {
                throw error
            })
    }
}
