import {Container} from "typedi";
import TipRepositoryPostgres from "../infrastructure/adapters/tipRepositoryPostgres";
import EnvironmentRepositoryPostgres from "../infrastructure/adapters/environmentRepositoryPostgres";

export default class DependencyContainer {
    public static init() {
        Container.set('TipRepositoryInterface', new TipRepositoryPostgres())
        Container.set('EnvironmentRepositoryInterface', new EnvironmentRepositoryPostgres())
    }
}
