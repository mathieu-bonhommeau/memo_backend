export default abstract class RequestInput {
    protected constructor(
        protected readonly _start: number,
        protected readonly _offset: number,
        protected readonly _order: string,
    ) {}

    get start(): number {
        return this._start
    }

    get offset(): number {
        return this._offset
    }

    get order(): string {
        return this._order
    }
}
