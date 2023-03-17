import EnvironmentRepositoryStub from '../../stubs/environmentRepositoryStub'
import { environmentsMocks } from '../../mocks/environments'
import EnvironmentProvider from '../../../src/application/providers/environmentProvider'

describe('Environment provider test', () => {
    test('should return environment objects', async () => {
        const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryStub())
        const environment = await environmentProvider.provideAll()
        expect(environment).toEqual(environmentsMocks)
    })
})
