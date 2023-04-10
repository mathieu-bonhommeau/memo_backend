import Tip from '../../models/Tip'
import TipCreateRequest from '../../../application/requests/tip/tipCreateRequest'

export default interface TipRepositoryInterface {
    getAll(): Promise<Tip[]>
    store(tipCreateRequest: TipCreateRequest): Promise<Tip>
}
