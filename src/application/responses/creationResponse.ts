import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";
import {JsonCreationResponse, JsonResponse} from "../../domain/types/types";
import ResponseDTO from "../DTO/responseDTO";

export default class CreationResponse {
    constructor(private responseDTO: ResponseDTO) {}

    public build(): JsonCreationResponse {
        const data = this.responseDTO.jsonData.map((object) => {
            return { ...object }
        })

        return {
            data: data,
        }
    }
}