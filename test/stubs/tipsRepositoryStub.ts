import TipsRepositoryInterface from '../../src/domain/ports/repositories/tipsRepositoryInterface'
import TipsFactory from '../../src/application/factories/tipsFactory'
import Tips from '../../src/domain/models/Tips'
import { tipsMocks } from '../mocks/tips'

export default class TipsRepositoryStub implements TipsRepositoryInterface {
    async getAll(): Promise<Array<Tips>> {
        return tipsMocks
    }
}
