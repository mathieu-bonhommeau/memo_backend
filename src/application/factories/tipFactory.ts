import Tip from '../../domain/models/Tip'

export default class TipFactory {
    public static create(
        command: string,
        description: string,
        environmentId: number,
        createdAt: Date,
        updatedAt: Date,
    ): Tip {
        return new Tip(command, description, environmentId, createdAt, updatedAt)
    }
}
