import Tip from '../../src/domain/models/Tip'
import { tipsMocks } from '../mocks/tips'
import TipRepositoryInterface from '../../src/domain/ports/repositories/tipRepositoryInterface'

export default class TipRepositoryStub implements TipRepositoryInterface {
    async getAll(): Promise<Array<Tip>> {
        return tipsMocks
    }
}
