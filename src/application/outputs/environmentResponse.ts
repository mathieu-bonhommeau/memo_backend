import PaginateResponse from './paginateResponse'
import RequestInput from '../../infrastructure/inputs/requestInput'
import EnvironmentProvider from '../providers/environmentProvider'

export default class EnvironmentResponse {
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

    public getAllWithTips(): Promise<PaginateResponse | void> {
        return this.provider
            .provideAllWithTips()
            .then((environment) => {
                return new PaginateResponse(this.input, environment)
            })
            .catch((error) => {
                throw error
            })
    }
}
