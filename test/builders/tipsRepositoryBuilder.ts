import TipsRepositoryInterface from '../../src/domain/ports/tipsRepositoryInterface'
import Tips from '../../src/domain/models/Tips'
import Tips
/*const tips = [
            {
                tips: 'sudo systemctl start postgres',
                description: 'Démarrer service postgres',
            },
            {
                tips: 'sudo systemctl stop postgres',
                description: 'Stopper service postgres',
            },
            {
                tips: 'sudo systemctl status postgres',
                description: 'Etat service postgres',
            },
        ]*/
class TipsRepositoryBuilder implements TipsRepositoryInterface {
    static async getAll(): Promise<Array<Tips>> {
            return [
                TipsFactory.create('sudo systemctl start postgres', 'Démarrer service postgres'),
                TipsFactory.create('sudo systemctl stop postgres', 'Stopper service postgres'),
                TipsFactory.create('sudo systemctl status postgres', 'Etat service postgres'),
            ]
    }
}
