

export default class EnvironmentCreateRequestDTO {
    private constructor(public name: string, public details: string) {}

    public static buildWithBody(body: EnvironmentBodyQuery): EnvironmentCreateRequestDTO {
        return new EnvironmentCreateRequestDTO(
            body.name,
            body.details
        )
    }
}