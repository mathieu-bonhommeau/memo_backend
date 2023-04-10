import PaginateResponse from '../paginateResponse'
import Response from '../../../domain/ports/outputs/response'
import ActionResponse from '../actionResponse'
import TipsRequest from '../../requests/tip/tipsRequest'
import Tip from '../../../domain/models/Tip'
import { JsonTipData } from '../../../domain/types/tip'

export default class TipResponse implements Response {
    public buildWithPagination(tipsRequest: TipsRequest, tips: Tip[]): PaginateResponse {
        const jsonData: JsonTipData[] = tips.map((tip: Tip) => this.buildJson(tip))
        return new PaginateResponse(tipsRequest, jsonData)
    }

    public buildForCreation(tip: Tip): ActionResponse {
        const jsonData: JsonTipData = this.buildJson(tip)
        return new ActionResponse(jsonData)
    }

    private buildJson(tip: Tip): JsonTipData {
        return {
            id: tip.id,
            command: tip.command,
            description: tip.description,
            environment_id: tip.environment_id,
            created_at: tip.created_at,
            updated_at: tip.updated_at,
        } as JsonTipData
    }
}
