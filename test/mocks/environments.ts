import EnvironmentFactory from '../../src/application/factories/environmentFactory'

export const environmentsMocks = [
    EnvironmentFactory.create(1, 'PostgreSql', 'Base de donnée relationelle', new Date(), new Date()),
    EnvironmentFactory.create(2, 'Docker', 'Système de version', new Date(), new Date()),
]

export const environmentsMock = EnvironmentFactory.create(
    1,
    'Git',
    'Logiciel de controle de version',
    new Date(),
    new Date(),
)
