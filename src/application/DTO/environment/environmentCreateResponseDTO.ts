import Environment from "../../../domain/models/Environment";
import ResponseDTO from "../responseDTO";
import {JsonEnvironmentData} from "../../../domain/types/types";

export default class EnvironmentCreateResponseDTO extends ResponseDTO {
    private constructor(jsonData: JsonEnvironmentData[]) {
        super(jsonData)
    }

    public static buildFromResult(environment: Environment): EnvironmentCreateResponseDTO {
        const jsonData: JsonEnvironmentData =  {
                id: environment.id,
                name: environment.name,
                details: environment.details,
                created_at: environment.created_at,
                updated_at: environment.updated_at
            } as JsonEnvironmentData

        return new EnvironmentCreateResponseDTO([jsonData])
    }
}