import PaginateResponse from '../paginateResponse'
import EnvironmentService from "../../services/environmentService";
import EnvironmentsRequestDTO from "../../DTO/environment/environmentsRequestDTO";
import EnvironmentsResponseDTO from "../../DTO/environment/environmentsResponseDTO";
import Environment from "../../../domain/models/Environment";
import CreationResponse from "../creationResponse";
import EnvironmentCreateResponseDTO from "../../DTO/environment/environmentCreateResponseDTO";

export default class EnvironmentResponse {

    public static buildWithPagination(environmentRequestDTO: EnvironmentsRequestDTO, environments: Environment[] ): PaginateResponse {
        const environmentsResponseDTO: EnvironmentsResponseDTO = EnvironmentsResponseDTO.buildFromResults(environments)
        return new PaginateResponse(environmentRequestDTO, environmentsResponseDTO)
    }

    public static buildForCreation(environment: Environment): CreationResponse {
        const environmentCreateResponseDTO: EnvironmentCreateResponseDTO = EnvironmentCreateResponseDTO.buildFromResult(environment)
        return new CreationResponse(environmentCreateResponseDTO)
    }
}
