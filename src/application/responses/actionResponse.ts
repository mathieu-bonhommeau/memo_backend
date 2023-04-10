import { JsonActionResponse } from '../../domain/types/response'

export default class ActionResponse {
    constructor(private jsonData: object) {}

    public build(): JsonActionResponse {
        return {
            data: this.jsonData,
        }
    }
}
