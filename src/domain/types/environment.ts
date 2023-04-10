export type JsonEnvironmentData = {
    id: string
    name: string
    details: string
    created_at: Date
    updated_at: Date
}

export type NewEnvironmentBody = {
    name: string
    details: string
}
