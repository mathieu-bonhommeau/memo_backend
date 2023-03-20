import TipDTOInterface from '../../../application/DTO/tipDTOInterface'
import Tip from '../../../domain/models/Tip'
import TipFactory from '../../../application/factories/tipFactory'

export default class TipExpressDTO implements TipDTOInterface {
    public constructor(public command: string, public description: string, public environmentId: number) {}

    public format(): Tip {
        return TipFactory.create(null, this.command, this.description, this.environmentId, new Date(), new Date())
    }
}
