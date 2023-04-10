import { Container } from 'typedi'
import TipRepositoryPostgres from '../infrastructure/adapters/tipRepositoryPostgres'
import EnvironmentRepositoryPostgres from '../infrastructure/adapters/environmentRepositoryPostgres'
import EnvironmentRepositoryStub from "../../test/stubs/environmentRepositoryStub";
import TipRepositoryStub from "../../test/stubs/tipRepositoryStub";

export default class DependencyContainer {
    public static init() {
        Container.set('TipRepositoryInterface', new TipRepositoryPostgres())
        Container.set('EnvironmentRepositoryInterface', new EnvironmentRepositoryPostgres())
    }

    public static initForUnitTest() {
        Container.set('TipRepositoryInterface', new TipRepositoryStub())
        Container.set('EnvironmentRepositoryInterface', new EnvironmentRepositoryStub())
    }
}
