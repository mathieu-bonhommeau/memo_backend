import { NewTipBody } from '../../../domain/types/tip'

export default class TipCreateRequest {
    private constructor(public command: string, public description: string, public environment_id: string) {}

    public static buildWithBody(body: NewTipBody): TipCreateRequest {
        return new TipCreateRequest(body.command, body.description, body.environment_id)
    }
}
