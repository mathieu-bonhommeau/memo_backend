import PaginatedRequestDTO from "../paginatedRequestDTO";
import {Order} from "../../../domain/types/enums";
import PaginatedQuery from "../../../infrastructure/inputs/queries/PaginatedQuery";


export default class EnvironmentsPaginatedRequestDTO extends PaginatedRequestDTO {
    private constructor(start: number, offset: number, order: Order) {
        super(start, offset, order);
    }

    public static buildWithParams(params: PaginatedQuery): EnvironmentsPaginatedRequestDTO {
        return new EnvironmentsPaginatedRequestDTO(
            params.start,
            params.offset,
            params.order
        )
    }
}