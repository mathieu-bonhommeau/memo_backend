import RequestInput from './requestInput'
import EnvironmentQuery from "./queries/EnvironmentQuery";

export default class EnvironmentRequestInput extends RequestInput {
    constructor(_start: number, _offset: number, _order: string) {
        super(_start, _offset, _order)
    }

    static buildFromRequest(pRequest: EnvironmentQuery): EnvironmentRequestInput {
        return new EnvironmentRequestInput(pRequest.start, pRequest.offset, pRequest.order)
    }

    public get start(): number {
        return this._start
    }

    public get offset(): number {
        return this._offset
    }

    public get order(): string {
        return this._order
    }
}
