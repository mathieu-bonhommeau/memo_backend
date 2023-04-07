import Environment from "../../../domain/models/Environment";

export default class EnvironmentsResponseDTO extends ResponseDTO {
    private constructor(environment: Environment[]) {
        super()
    }

    public static build(environments: Environment[]): EnvironmentsResponseDTO {
        return new EnvironmentsResponseDTO()
    }
}