import PaginatedRequestDTO from "../paginatedRequestDTO";
import {Order} from "../../../domain/types/enums";
import PaginatedQuery from "../../../infrastructure/inputs/queries/PaginatedQuery";


export default class EnvironmentsCreateRequestDTO {
    private constructor(start: number, offset: number, order: Order) {
        super(start, offset, order);
    }

    public static buildWithBody(body: BodyQuery): EnvironmentsPaginatedRequestDTO {

    }
}