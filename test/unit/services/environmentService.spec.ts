import EnvironmentRepositoryStub from '../../stubs/environmentRepositoryStub'
import { environmentsMocks, environmentsMocksWithTips } from '../../mocks/environments'
import EnvironmentProvider from '../../../src/application/services/environmentService'
import EnvironmentService from "../../../src/application/services/environmentService";
import Environment from "../../../src/domain/models/Environment";
import DependencyContainer from "../../../src/_config/DependencyInjection";
import * as process from "process";

describe('Environment service test', () => {

    beforeAll(() => {
        process.env.CONTEXT = 'unit'
    })

    test('should return environment objects', async () => {
        console.log(process.env.CONTEXT)
        const environmentService: EnvironmentService = new EnvironmentService()
        const environment: Environment[] = await environmentService.provideAll()
        expect(environment).toEqual(environmentsMocks)
    })

   /* test('should return environments object with tips associated', async () => {
        const environmentProvider = new EnvironmentProvider(new EnvironmentRepositoryStub())
        const environment = await environmentProvider.provideAllWithTips()
        expect(environment).toEqual(environmentsMocksWithTips)
    })*/
})
