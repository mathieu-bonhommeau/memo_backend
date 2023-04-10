import Tip from '../../domain/models/Tip'
import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import { Inject } from 'typedi'

export default class TipFactory {
    public static create(
        id: string,
        command: string,
        description: string,
        environment_id: string,
        created_at: Date,
        updated_at: Date,
    ): Tip {
        return new Tip()
            .setId(id)
            .setCommand(command)
            .setDescription(description)
            .setCreatedAt(created_at)
            .setUpdatedAt(updated_at)
            .setEnvironmentId(environment_id)
    }
}
