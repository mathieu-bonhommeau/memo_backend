import {Order} from "./enums";

export type JsonEnvironmentData = {
    id: string,
    name: string,
    details: string,
    created_at: Date,
    updated_at: Date
}

export type JsonPaginateResponse = {
    data: object[]
    metadata: {
        start: number
        length: number
        recordsTotal: number
        order: Order
    }
}

export type JsonCreationResponse = {
    data: object[]
}