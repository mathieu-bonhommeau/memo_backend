import { Order } from '../enums/enums'

export type Pagination = {
    offset: number
    length: number
    order: Order
}
