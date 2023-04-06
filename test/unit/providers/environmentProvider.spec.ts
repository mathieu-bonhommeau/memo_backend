import EnvironmentRepositoryStub from '../../stubs/environmentRepositoryStub'
import { environmentsMocks, environmentsMocksWithTips } from '../../mocks/environments'
import EnvironmentProvider from '../../../src/application/services/environmentService'

describe('Environment provider test', () => {
    test('should return environment objects', async () => {
        const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryStub())
        const environment = await environmentProvider.provideAll()
        expect(environment).toEqual(environmentsMocks)
    })

    test('should return environments object with tips associated', async () => {
        const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryStub())
        const environment = await environmentProvider.provideAllWithTips()
        expect(environment).toEqual(environmentsMocksWithTips)
    })
})
