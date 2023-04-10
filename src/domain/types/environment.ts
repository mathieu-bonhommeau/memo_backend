import { JsonTipData } from './tip'

export type JsonEnvironmentData = {
    id: string
    name: string
    details: string
    created_at: Date
    updated_at: Date
    tips: JsonTipData[]
}

export type NewEnvironmentBody = {
    name: string
    details: string
}
