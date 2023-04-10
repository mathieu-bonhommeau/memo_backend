import TipService from '../../../src/application/services/tipService'
import TipRepositoryStub from '../../stubs/tipRepositoryStub'
import { tipsMocks } from '../../mocks/tips'

describe('Tip provider test', () => {
    test('should return Tips objects', async () => {
        const tipProvider = new TipService(new TipRepositoryStub())
        const tips = await tipProvider.provideAll()
        expect(tips).toEqual(tipsMocks)
    })
})
