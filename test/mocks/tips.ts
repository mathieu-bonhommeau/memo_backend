import TipFactory from '../../src/application/factories/tipFactory'

export const tipsMocks = [
    TipFactory.create('f3932182-d7c7-11ed-afa1-0242ac120002', 'sudo systemctl start postgres', 'Démarrer service postgres', 'abd488f4-d7c7-11ed-afa1-0242ac120002', new Date(), new Date()),
    TipFactory.create('f86d93cc-d7c7-11ed-afa1-0242ac120002', 'docker stop $(docker ps -a -q)', 'Stopper service postgres', '9e1f28fe-d7c7-11ed-afa1-0242ac120002', new Date(), new Date()),
    TipFactory.create('fd03fe76-d7c7-11ed-afa1-0242ac120002', 'sudo systemctl status postgres', 'Etat service postgres', 'abd488f4-d7c7-11ed-afa1-0242ac120002', new Date(), new Date()),
]

export const tipsMocksLinksToEnvironment = [
    TipFactory.create('024fb212-d7c8-11ed-afa1-0242ac120002', 'sudo systemctl start postgres', 'Démarrer service postgres', 'b449e664-d7c7-11ed-afa1-0242ac120002', new Date(), new Date()),
    TipFactory.create('0746e20e-d7c8-11ed-afa1-0242ac120002', 'sudo systemctl status postgres', 'Etat service postgres', 'b449e664-d7c7-11ed-afa1-0242ac120002', new Date(), new Date()),
]

export const tipMock = TipFactory.create(
    '0c390f94-d7c8-11ed-afa1-0242ac120002',
    'sudo systemctl start postgres',
    'Démarrer service postgres',
    '9e1f28fe-d7c7-11ed-afa1-0242ac120002',
    new Date(),
    new Date(),
)
