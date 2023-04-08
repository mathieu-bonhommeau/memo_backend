import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";
import {JsonResponse} from "../../domain/types/types";
import ResponseDTO from "../DTO/responseDTO";

export default class PaginateResponse {
    constructor(private paginatedRequestDTO: PaginatedRequestDTO, private responseDTO: ResponseDTO) {}

    public paginate(): JsonResponse {
        const data = this.responseDTO.jsonData.map((object) => {
            return { ...object }
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
