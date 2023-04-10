import PaginateRequest from '../../../domain/ports/inputs/paginateRequest'
import { Order } from '../../../domain/enums/enums'
import { Pagination } from '../../../domain/types/pagination'

export default class EnvironmentsRequest implements PaginateRequest {
    private constructor(public offset: number, public length: number, public order: Order) {}

    public static buildWithParams(params: Pagination): EnvironmentsRequest {
        return new EnvironmentsRequest(params.offset, params.length, params.order)
    }
}
