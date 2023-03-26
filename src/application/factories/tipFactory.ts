import Tip from '../../domain/models/Tip'

export default class TipFactory {
    public static create(
        id: number | null,
        command: string,
        description: string,
        environmentId: number,
        createdAt: Date,
        updatedAt: Date,
    ): Tip {
        return new Tip(id, command, description, environmentId, createdAt, updatedAt)
    }
}
