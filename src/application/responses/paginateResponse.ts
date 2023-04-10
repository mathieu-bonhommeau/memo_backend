import PaginateRequest from '../../domain/ports/inputs/paginateRequest'
import { JsonPaginateResponse } from '../../domain/types/response'
export default class PaginateResponse {
    constructor(private paginateRequest: PaginateRequest, private jsonData: object[]) {}

    public paginate(): JsonPaginateResponse {
        return {
            data: this.jsonData,
            metadata: {
                offset: this.paginateRequest.offset,
                length: this.paginateRequest.length,
                recordsTotal: this.jsonData.length,
                order: this.paginateRequest.order,
            },
        }
    }
}
