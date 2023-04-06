import PaginateResponse from "../responses/paginateResponse";

enum Order {
    'ASC',
    'DESC'
}

export interface PaginatedQuery {
    start: number,
    offset: number,
    order: Order
}

export default class PaginatedRequestDTO {
    private constructor(public start: number, public offset: number, public order: Order) {}

    public static buildFromRequest(params: PaginatedQuery) {
        return new PaginatedRequestDTO(
            params.start,
            params.offset,
            params.order
        )
    }
}