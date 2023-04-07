import PaginateResponse from './paginateResponse'
import PaginatedRequestDTO from "../DTO/paginatedRequestDTO";
import EnvironmentService from "../services/environmentService";
import EnvironmentsRequestDTO from "../DTO/environment/environmentsRequestDTO";
import responseDTO from "../DTO/responseDTO";

export default class EnvironmentResponse implements EnvironmentResponseInterface {

    public static getAll(environmentRequestDTO: EnvironmentsRequestDTO, environmentService: EnvironmentService): Promise<PaginateResponse> {
        return environmentService
            .provideAll()
            .then((environments): PaginateResponse => {
                if (environments.length > 0) {
                    const environmentsResponseDTO = EnvironmentsResponseDTO.build(environments)
                    return new PaginateResponse(environmentRequestDTO, environments)
                }
                return new PaginateResponse(environmentRequestDTO, [])
            })
            .catch((error) => {
                throw error
            })
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
