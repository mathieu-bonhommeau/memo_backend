import TipRepositoryStub from '../../stubs/tipRepositoryStub'
import TipAction from '../../../src/application/actions/tipAction'
import { tipMock } from '../../mocks/tips'

describe('Tip action tests', () => {
    test('should create a new tips and return it', async () => {
        const tipAction = new TipAction(new TipRepositoryStub())
        const newTip = await tipAction.store(tipMock)
        expect(newTip).toEqual(
            expect.objectContaining({
                id: 15,
                command: 'sudo systemctl start postgres',
                description: 'Démarrer service postgres',
                environmentId: 1,
            }),
        )
    })
})
