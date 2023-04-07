import {Order} from "../../domain/types/enums";

export default abstract class PaginatedRequestDTO {
    public start: number
    public offset: number
    public order: Order
    protected constructor(start: number, offset: number, order: Order) {
        this.start = start
        this.offset = offset
        this.order = order
    }
}