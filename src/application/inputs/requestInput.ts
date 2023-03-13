export default abstract class RequestInput {
    protected constructor(
        protected readonly _start: number = 0,
        protected readonly _offset: number = 10,
        protected readonly _order: string = 'desc',
    ) {}

    abstract get start(): number

    abstract get length(): number

    abstract get order(): string
}
