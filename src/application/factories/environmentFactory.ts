import Environment from '../../domain/models/Environment'

export default class EnvironmentFactory {
    public static create(
        id: number | null,
        name: string,
        details: string,
        createdAt: Date,
        updatedAt: Date,
    ): Environment {
        return new Environment(id, name, details, createdAt, updatedAt)
    }
}
