import PaginateResponse from './paginateResponse'
import EnvironmentService from "../services/environmentService";
import EnvironmentsRequestDTO from "../DTO/environment/environmentsPaginatedRequestDTO";
import EnvironmentsResponseDTO from "../DTO/environment/environmentsResponseDTO";
import Environment from "../../domain/models/Environment";

export default class EnvironmentResponse {

    public static buildWithPagination(environmentRequestDTO: EnvironmentsRequestDTO, environments: Environment[] ): PaginateResponse {
        const environmentsResponseDTO: EnvironmentsResponseDTO = EnvironmentsResponseDTO.buildFromResults(environments)
        return new PaginateResponse(environmentRequestDTO, environmentsResponseDTO)
    }

    public getAllWithTips(environmentRequestDTO: EnvironmentsRequestDTO, environmentService: EnvironmentService): Promise<PaginateResponse> {
        return environmentService
            .provideAllWithTips()
            .then((environmentsWithTips) => {
                if (environmentsWithTips.length > 0) {
                    return new PaginateResponse(environmentRequestDTO, environmentsWithTips)
                }
                return new PaginateResponse(paginatedRequestDTO, [])
            })
            .catch((error) => {
                throw error
            })
    }
}
