import RootModel from '../../domain/models/RootModel'
import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";


type JsonResponse = {
    data: object[]
    metadata: {
        start: number
        length: number
        recordsTotal: number
        order: Order
    }
}
export default class PaginateResponse {
    constructor(private paginatedRequestDTO: PaginatedRequestDTO, private models: Array<RootModel>) {}

    public paginate(): JsonResponse {
        const data = this.models.map((model) => {
            return { ...model }
        })

        return {
            data: data,
            metadata: {
                start: this.paginatedRequestDTO.start,
                length: this.paginatedRequestDTO.offset,
                recordsTotal: data.length,
                order: this.paginatedRequestDTO.order,
            },
        }
    }
}