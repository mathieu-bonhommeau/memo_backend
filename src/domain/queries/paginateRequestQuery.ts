import {Order} from "../types/enums";

export default interface PaginateRequestQuery {
    start: number,
    offset: number,
    order: Order
}