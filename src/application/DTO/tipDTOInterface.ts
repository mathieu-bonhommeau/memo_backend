import Tip from '../../domain/models/Tip'

export default interface TipDTOInterface {
    command: string
    description: string
    environmentId: number

    format(): Tip
}
