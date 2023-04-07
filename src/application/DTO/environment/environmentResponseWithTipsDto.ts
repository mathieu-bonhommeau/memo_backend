import PaginatedRequestDTO from "../paginatedRequestDTO";
import {Order} from "../../../domain/types/enums";
import PaginatedQuery from "../../../infrastructure/inputs/queries/PaginatedQuery";


export default class EnvironmentsResponseWithTipsDTO  {
    private constructor(start: number, offset: number, order: Order) {
        super(start, offset, order);
    }

    public static buildFromRequest(params: PaginatedQuery): EnvironmentsRequestDTO {
        return new EnvironmentsRequestDTO(
            params.start,
            params.offset,
            params.order
        )
    }
}