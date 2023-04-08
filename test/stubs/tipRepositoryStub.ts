import Tip from '../../src/domain/models/Tip'
import { tipsMocks } from '../mocks/tips'
import TipRepositoryInterface from '../../src/domain/ports/tipRepositoryInterface'

export default class TipRepositoryStub implements TipRepositoryInterface {
    async getAll(): Promise<Array<Tip>> {
        return tipsMocks
    }

    async store(tip: Tip): Promise<Tip> {
        return tip
    }
}
