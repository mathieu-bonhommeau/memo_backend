import EnvironmentFactory from '../../src/application/factories/environmentFactory'

export const environmentsMocks = [
    EnvironmentFactory.create('PostgreSql', 'Base de donnée relationelle', new Date(), new Date()),
    EnvironmentFactory.create('Docker', 'Système de version', new Date(), new Date()),
]
