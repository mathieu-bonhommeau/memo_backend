import {ContainerBuilder} from "node-dependency-injection";
import EnvironmentRepositoryPostgres from "../infrastructure/adapters/repositories/environmentRepositoryPostgres";

let container = new ContainerBuilder()

container.register('EnvironmentRepositoryPostgres', EnvironmentRepositoryPostgres)