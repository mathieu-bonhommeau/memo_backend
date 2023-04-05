import RequestInput from './requestInput'

export default class TipRequestInput extends RequestInput {
    constructor(_start: number, _length: number, _order: string) {
        super(_start, _length, _order)
    }

    get start(): number {
        return this._start
    }

    get length(): number {
        return this._offset
    }

    get order(): string {
        return this._order
    }
}
