import EnvironmentRepositoryStub from '../../stubs/environmentRepositoryStub'
import EnvironmentAction from '../../../src/application/actions/environmentAction'
import EnvironmentExpressDTO from '../../../src/infrastructure/adapters/DTO/environmentExpressDTO'

describe('Environment action tests', () => {
    test('should create a new environment', async () => {
        const environment = new EnvironmentExpressDTO('Git', 'Logiciel de controle de version').format()
        const environmentAction = new EnvironmentAction(new EnvironmentRepositoryStub())
        const newEnvironment = await environmentAction.store(environment)
        expect(newEnvironment).toEqual(
            expect.objectContaining({
                name: 'Git',
                details: 'Logiciel de controle de version',
            }),
        )
    })
})
