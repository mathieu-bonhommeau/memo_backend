import RootModel from '../../domain/models/RootModel'
import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";
import {JsonResponse} from "../../domain/types/types";

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
