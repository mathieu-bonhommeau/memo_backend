import TipsRepositoryInterface from "../../../domain/ports/repositories/tipsRepositoryInterface";
import Tips from "../../../domain/models/Tips";
import TipsFactory from "../../factories/tipsFactory";

export default class TipsRepositoryPostgres implements TipsRepositoryInterface {
    async getAll(): Promise<Array<Tips>> {
        // Provisoire
        return [
            TipsFactory.create('sudo systemctl start postgres', 'Démarrer service postgres'),
            TipsFactory.create('sudo systemctl stop postgres', 'Stopper service postgres'),
            TipsFactory.create('sudo systemctl status postgres', 'Etat service postgres'),
        ]
    }

}