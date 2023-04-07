import PaginateResponse from "../responses/paginateResponse";
import PaginatedRequestDTO, {PaginatedQuery} from "../paginatedRequestDTO";
import {Order} from "../../../domain/types/enums";


export default class EnvironmentsRequestDTO extends PaginatedRequestDTO {
    private constructor(private start: number, private offset: number, private order: Order) {
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