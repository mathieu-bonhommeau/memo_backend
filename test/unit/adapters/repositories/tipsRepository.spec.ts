import TipsRepositoryStub from '../../../stubs/tipsRepositoryStub'
import TipsFactory from '../../../../src/application/factories/tipsFactory'
import { tipsMocks } from '../../../mocks/tips'

describe('Tips repository test', () => {
    test('should return tips objects', async () => {
        const tips = await new TipsRepositoryStub().getAll()
        expect(tips).toEqual(tipsMocks)
    })
})
