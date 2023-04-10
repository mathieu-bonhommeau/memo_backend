import Environment from '../../../domain/models/Environment'
import Response from '../../../domain/ports/outputs/response'
import PaginateResponse from '../paginateResponse'
import EnvironmentsRequest from '../../requests/environment/environmentsRequest'
import ActionResponse from '../actionResponse'
import { JsonEnvironmentData } from '../../../domain/types/environment'

export default class EnvironmentsResponse implements Response {
    public buildWithPagination(
        environmentsRequest: EnvironmentsRequest,
        environments: Environment[],
    ): PaginateResponse {
        const jsonData: JsonEnvironmentData[] = environments.map((environment: Environment) =>
            this.buildJson(environment),
        )
        return new PaginateResponse(environmentsRequest, jsonData)
    }

    public buildForCreation(environment: Environment): ActionResponse {
        const jsonData: JsonEnvironmentData = this.buildJson(environment)
        return new ActionResponse(jsonData)
    }

    private buildJson(environment: Environment): JsonEnvironmentData {
        return {
            id: environment.id,
            name: environment.name,
            details: environment.details,
            created_at: environment.created_at,
            updated_at: environment.updated_at,
        } as JsonEnvironmentData
    }
}
