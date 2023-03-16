import TipsFactory from '../../src/application/factories/tipsFactory'

export const tipsMocks = [
    TipsFactory.create('sudo systemctl start postgres', 'Démarrer service postgres',  new Date(), new Date()),
    TipsFactory.create('docker stop $(docker ps -a -q)', 'Stopper service postgres',  new Date(), new Date()),
    TipsFactory.create('sudo systemctl status postgres', 'Etat service postgres',  new Date(), new Date()),
]

