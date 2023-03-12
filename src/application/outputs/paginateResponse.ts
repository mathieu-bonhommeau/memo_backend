import Tips from '../../domain/models/Tips'
import RequestInput from '../inputs/requestInput'
import RootModel from '../../domain/models/rootModel'

type JsonResponse = {
    data: object[]
    metadata: {
        start: number
        offset: number
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
                offset: this.input.offset,
                order: this.input.order,
            },
        }
    }
}
