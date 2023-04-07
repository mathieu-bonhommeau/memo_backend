import PaginateResponse from "../responses/paginateResponse";
import {Order} from "../../domain/types/enums";
import PaginatedQuery from "../../infrastructure/inputs/queries/PaginatedQuery";
import EnvironmentsRequestDTO from "./environment/EnvironmentRequestDTO";

export default abstract class PaginatedRequestDTO {
    protected constructor(start: number, offset: number, order: Order) {}
}