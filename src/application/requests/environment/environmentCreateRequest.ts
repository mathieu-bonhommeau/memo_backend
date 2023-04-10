import { NewEnvironmentBody } from '../../../domain/types/environment'

export default class EnvironmentCreateRequest {
    private constructor(public name: string, public details: string) {}

    public static buildWithBody(body: NewEnvironmentBody): EnvironmentCreateRequest {
        return new EnvironmentCreateRequest(body.name, body.details)
    }
}
