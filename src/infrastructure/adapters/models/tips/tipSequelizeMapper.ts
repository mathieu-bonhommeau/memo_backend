import Tip from '../../../../domain/models/Tip'
import TipSequelize from './tipSequelize'
import TipFactory from '../../../../application/factories/tipFactory'

export default class TipSequelizeMapper {
    constructor(private tip: Tip | TipSequelize) {}

    public syncToSequelize(): TipSequelize {
        return TipSequelize.build({
            command: this.tip.command,
            description: this.tip.description,
            environmentId: this.tip.environmentId,
            createdAt: this.tip.createdAt,
            updatedAt: this.tip.updatedAt,
        })
    }

    public syncToTip(): Tip {
        return TipFactory.create(
            this.tip.id,
            this.tip.command,
            this.tip.description,
            this.tip.environmentId,
            this.tip.createdAt,
            this.tip.updatedAt,
        )
    }
}
