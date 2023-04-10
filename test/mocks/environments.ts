import EnvironmentFactory from '../../src/application/factories/environmentFactory'
import { tipsMocksLinksToEnvironment } from './tips'

export const environmentsMocks = [
    EnvironmentFactory.create('9e1f28fe-d7c7-11ed-afa1-0242ac120002', 'PostgreSql', 'Base de donnée relationelle', new Date(), new Date()),
    EnvironmentFactory.create('abd488f4-d7c7-11ed-afa1-0242ac120002', 'Docker', 'Système de version', new Date(), new Date()),
]

export const environmentsMocksWithTips = [
    EnvironmentFactory.createWithTips(
        'b449e664-d7c7-11ed-afa1-0242ac120002',
        'PostgreSql',
        'Base de donnée relationelle',
        new Date(),
        new Date(),
        tipsMocksLinksToEnvironment,
    ),
]

export const environmentsMock = EnvironmentFactory.create(
    'bc572786-d7c7-11ed-afa1-0242ac120002',
    'Git',
    'Logiciel de controle de version',
    new Date(),
    new Date(),
)
