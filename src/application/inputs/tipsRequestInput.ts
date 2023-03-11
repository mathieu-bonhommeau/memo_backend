export default class TipsRequestInput {
    constructor(private _start: number, private _offset: number, private _order: number ) {}

    get start(): number {
        return this._start;
    }

    get offset(): number {
        return this._offset;
    }

    get order(): number {
        return this._order;
    }
}