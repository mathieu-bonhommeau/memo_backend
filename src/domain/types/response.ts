import { Order } from '../enums/enums'

export type JsonPaginateResponse = {
    data: object[]
    metadata: {
        offset: number
        length: number
        recordsTotal: number
        order: Order
    }
}

export type JsonActionResponse = {
    data: object
}
