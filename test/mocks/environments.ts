import EnvironmentFactory from "../../src/application/factories/environmentFactory";

export const environmentsMocks = [
    EnvironmentFactory.create('PostgreSql', 'Base de donnée relationelle', new Date(), new Date()),
    EnvironmentFactory.create('Ubuntu', "Système d'exploitation", new Date(), new Date()),
]