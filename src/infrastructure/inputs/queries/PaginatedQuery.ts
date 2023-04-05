export default abstract class PaginatedQuery {
    protected constructor(protected start: number, protected offset: number, protected order: string) {}
}