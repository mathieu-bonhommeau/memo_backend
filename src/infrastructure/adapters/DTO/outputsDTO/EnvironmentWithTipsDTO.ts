import Tip from '../../../../domain/models/Tip'

export default class EnvironmentWithTipsDTO {
    private constructor(
        public id: number | null,
        public name: string,
        public details: string,
        public createdAt: Date,
        public updatedAt: Date,
        public tips: Tip[] | null,
    ) {}

    public static create(
        id: number | null,
        name: string,
        details: string,
        createdAt: Date,
        updatedAt: Date,
        tips: Tip[] | null,
    ): EnvironmentWithTipsDTO {
        return new EnvironmentWithTipsDTO(id, name, details, createdAt, updatedAt, tips)
    }
}
