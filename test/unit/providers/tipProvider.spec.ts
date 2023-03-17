import TipProvider from '../../../src/application/actions/providers/tipProvider'
import TipRepositoryStub from '../../stubs/tipRepositoryStub'
import { tipsMocks } from '../../mocks/tips'

describe('Tip provider test', () => {
    test('should return Tips objects', async () => {
        const tipProvider = new TipProvider(new TipRepositoryStub())
        const tips = await tipProvider.provideAll()
        expect(tips).toEqual(tipsMocks)
    })
})
