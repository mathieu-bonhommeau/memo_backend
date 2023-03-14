import Environment from '../../domain/models/Environment'

export default class EnvironmentFactory {
    public static create(name: string, details: string, createdAt: Date, updatedAt: Date): Environment {
        return new Environment(name, details, createdAt, updatedAt)
    }
}