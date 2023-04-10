import Environment from '../../domain/models/Environment'
import Tip from '../../domain/models/Tip'

export default class EnvironmentFactory {
    public static create(id: string, name: string, details: string, created_at: Date, updated_at: Date): Environment {
        return new Environment()
            .setId(id)
            .setName(name)
            .setDetails(details)
            .setCreatedAt(created_at)
            .setUpdatedAt(updated_at)
    }

    public static createWithTips(
        id: string,
        name: string,
        details: string,
        created_at: Date,
        updated_at: Date,
        tips: Tip[],
    ): Environment {
        return new Environment()
            .setId(id)
            .setName(name)
            .setDetails(details)
            .setCreatedAt(created_at)
            .setUpdatedAt(updated_at)
            .setTips(tips)
    }
}
