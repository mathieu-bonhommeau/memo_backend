import Tip from '../../models/Tip'

export default interface TipRepositoryInterface {
    getAll(): Promise<Array<Tip>>
}
