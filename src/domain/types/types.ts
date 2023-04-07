import {Order} from "./enums";

export type JsonResponse = {
    data: object[]
    metadata: {
        start: number
        length: number
        recordsTotal: number
        order: Order
    }
}