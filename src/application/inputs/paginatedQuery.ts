import {Order} from "../../domain/types/enums";

export default interface PaginateQuery {
    start: number
    offset: number,
    order: Order
}