import TipsRepositoryStub from '../../stubs/tipsRepositoryStub'
import { tipsMocks } from '../../mocks/tips'
import TipsProvider from "../../../src/application/actions/providers/tipsProvider";

describe('Tips provider test', () => {
    test('should return tips objects', async () => {
        const tipsProvider = new TipsProvider(new TipsRepositoryStub())
        const tips = await tipsProvider.provideAll()
        expect(tips).toEqual(tipsMocks)
    })
})
