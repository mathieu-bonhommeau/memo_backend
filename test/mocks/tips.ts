import TipFactory from '../../src/application/factories/tipFactory'

export const tipsMocks = [
    TipFactory.create(1, 'sudo systemctl start postgres', 'Démarrer service postgres', 1, new Date(), new Date()),
    TipFactory.create(2, 'docker stop $(docker ps -a -q)', 'Stopper service postgres', 2, new Date(), new Date()),
    TipFactory.create(3, 'sudo systemctl status postgres', 'Etat service postgres', 1, new Date(), new Date()),
]

export const tipMock = TipFactory.create(
    15,
    'sudo systemctl start postgres',
    'Démarrer service postgres',
    1,
    new Date(),
    new Date(),
)
