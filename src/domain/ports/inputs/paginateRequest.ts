import { Order } from '../../enums/enums'

export default interface PaginateRequest {
    offset: number
    length: number
    order: Order
}
