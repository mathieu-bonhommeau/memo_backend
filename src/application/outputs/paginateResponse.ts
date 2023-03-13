import RequestInput from '../inputs/requestInput'
import RootModel from "../../domain/models/RootModel";

type JsonResponse = {
    data: object[]
    metadata: {
        start: number
        length: number
        recordsTotal: number
        order: string
    }
}
export default class PaginateResponse {
    constructor(private input: RequestInput, private models: Promise<Array<RootModel>>) {}

    async paginate(): Promise<JsonResponse> {
        const models = await this.models
        const data = models.map((model) => {
            return { ...model }
        })
        return {
            data: data,
            metadata: {
                start: this.input.start,
                length: this.input.length,
                recordsTotal: data.length,
                order: this.input.order,
            },
        }
    }
}
