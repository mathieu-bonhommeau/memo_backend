import PaginateRequest from '../../domain/ports/inputs/paginateRequest'
import {JsonPaginateResponse} from '../../domain/types/response'
import {Order} from "../../domain/enums/enums";

export default class PaginateResponse {
    constructor(private paginateRequest: PaginateRequest, private jsonData: object[]) {}

    public paginate(): JsonPaginateResponse {
        return {
            data: this.jsonData,
            metadata: {
                offset: this.paginateRequest.offset || 0,
                length: this.paginateRequest.length || 10,
                recordsTotal: this.jsonData.length || 0,
                order: this.paginateRequest.order || Order.ASC,
            },
        }
    }
}
