import {Order} from "../../domain/types/enums";

export default interface PaginateRequestQuery {
    start: number,
    offset: number,
    order: Order
}