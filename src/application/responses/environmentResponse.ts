import PaginateResponse from './paginateResponse'
import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";
import EnvironmentService from "../services/environmentService";

export default class EnvironmentResponse {

    public static getAll(paginatedRequestDTO: PaginatedRequestDTO, environmentService: EnvironmentService): Promise<PaginateResponse> {
        return environmentService
            .provideAll()
            .then((environments) => {
                if (environments.length > 0) {
                    return new PaginateResponse(paginatedRequestDTO, environments)
                }
                return new PaginateResponse(paginatedRequestDTO, [])
            })
            .catch((error) => {
                throw error
            })
    }

    public getAllWithTips(paginatedRequestDTO: PaginatedRequestDTO, environmentService: EnvironmentService): Promise<PaginateResponse> {
        return environmentService
            .provideAllWithTips()
            .then((environmentsWithTips) => {
                if (environmentsWithTips.length > 0) {
                    return new PaginateResponse(paginatedRequestDTO, environmentsWithTips)
                }
                return new PaginateResponse(paginatedRequestDTO, [])
            })
            .catch((error) => {
                throw error
            })
    }
}
