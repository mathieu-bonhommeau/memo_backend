import PaginateRequest from '../../../domain/ports/inputs/paginateRequest'
import { Order } from '../../../domain/enums/enums'
import { Pagination } from '../../../domain/types/pagination'

export default class TipsRequest implements PaginateRequest {
    private constructor(public offset: number, public length: number, public order: Order) {}

    public static buildWithParams(params: Pagination): TipsRequest {
        return new TipsRequest(params.offset, params.length, params.order)
    }
}
