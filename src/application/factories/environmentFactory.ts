import Environment from '../../domain/models/Environment'
import Tip from '../../domain/models/Tip'
import EnvironmentWithTipsDTO from '../../infrastructure/adapters/DTO/outputsDTO/EnvironmentWithTipsDTO'

export default class EnvironmentFactory {
    public static create(
        id: string,
        name: string,
        details: string,
        created_at: Date,
        updated_at: Date,
    ): Environment {
        return new Environment(id, name, details, created_at, updated_at)
    }

    public static createWithTips(
        id: number | null,
        name: string,
        details: string,
        createdAt: Date,
        updatedAt: Date,
        tips: Tip[] | null,
    ): EnvironmentWithTipsDTO {
        return EnvironmentWithTipsDTO.create(id, name, details, createdAt, updatedAt, tips)
    }
}
