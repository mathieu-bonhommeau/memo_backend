import TipsRepositoryInterface from "../../src/domain/ports/repositories/tipsRepositoryInterface";
import TipsFactory from "../../src/infrastructure/factories/tipsFactory";
import Tips from "../../src/domain/models/Tips";

export default class TipsRepositoryMock implements TipsRepositoryInterface {
    async getAll(): Promise<Array<Tips>> {
        return [
            TipsFactory.create('sudo systemctl start postgres', 'Démarrer service postgres'),
            TipsFactory.create('sudo systemctl stop postgres', 'Stopper service postgres'),
            TipsFactory.create('sudo systemctl status postgres', 'Etat service postgres'),
        ]
    }
}
