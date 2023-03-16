import TipFactory from '../../src/application/factories/tipFactory'

export const tipsMocks = [
    TipFactory.create('sudo systemctl start postgres', 'Démarrer service postgres', 1, new Date(), new Date()),
    TipFactory.create('docker stop $(docker ps -a -q)', 'Stopper service postgres', 2, new Date(), new Date()),
    TipFactory.create('sudo systemctl status postgres', 'Etat service postgres', 1, new Date(), new Date()),
]
