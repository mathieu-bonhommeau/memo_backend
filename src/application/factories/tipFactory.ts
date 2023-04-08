import Tip from '../../domain/models/Tip'
import EnvironmentRepositoryInterface from "../../domain/ports/repositories/environmentRepositoryInterface";
import {Inject} from "typedi";

export default class TipFactory {
    constructor(
        @Inject()
        private environmentRepository: EnvironmentRepositoryInterface
    ) {}
    public static create(
        id: string,
        command: string,
        description: string,
        environmentId: string,
        created_at: Date,
        updated_at: Date,
    ): Tip {
        return new Tip()
            .setId(id)
            .setCommand(command)
            .setDescription(description)
            .setCreatedAt(created_at)
            .setUpdatedAt(updated_at)
            .setEnvironmentId(environmentId)
    }
}
