import PaginatedRequestDTO from "../paginatedRequestDTO";
import {Order} from "../../../domain/types/enums";
import PaginatedQuery from "../../inputs/paginatedQuery";


export default class EnvironmentsRequestDTO extends PaginatedRequestDTO {
    private constructor(start: number, offset: number, order: Order) {
        super(start, offset, order);
    }

    public static buildWithParams(params: PaginatedQuery): EnvironmentsRequestDTO {
        return new EnvironmentsRequestDTO(
            params.start,
            params.offset,
            params.order
        )
    }
}