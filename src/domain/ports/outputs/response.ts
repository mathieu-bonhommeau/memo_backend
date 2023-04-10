import PaginateResponse from '../../../application/responses/paginateResponse'
import { JsonPaginateResponse } from '../../types/response'
import ActionResponse from '../../../application/responses/actionResponse'
import PaginateRequest from '../inputs/paginateRequest'

export default interface Response {
    buildWithPagination(paginateRequest: PaginateRequest, datas: object[]): PaginateResponse
    buildForCreation(data: object): ActionResponse
}
