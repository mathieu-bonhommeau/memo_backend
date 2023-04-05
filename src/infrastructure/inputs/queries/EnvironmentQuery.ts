import PaginatedQuery from "./PaginatedQuery";

export default class EnvironmentQuery extends PaginatedQuery {
    constructor(public start: number, public offset: number, public order: string) {
        super(start, offset, order)
    }
}