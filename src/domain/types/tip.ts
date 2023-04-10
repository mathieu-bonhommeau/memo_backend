export type JsonTipData = {
    id: string
    command: string
    description: string
    environment_id: string
    created_at: Date
    updated_at: Date
}

export type NewTipBody = {
    command: string
    description: string
    environment_id: string
}
