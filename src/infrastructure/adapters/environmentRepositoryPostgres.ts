import EnvironmentRepositoryInterface from '../../domain/ports/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import EnvironmentFactory from '../../application/factories/environmentFactory'
import SequelizeUtils from '../../_common/pgUtils'
import PgUtils from "../../_common/pgUtils";
import {Row, RowList, Sql} from "postgres";
import {Service} from "typedi";
import TipFactory from "../../application/factories/tipFactory";
import EnvironmentCreateRequestDTO from "../../application/DTO/environment/environmentCreateRequestDTO";

@Service()
export default class EnvironmentRepositoryPostgres implements EnvironmentRepositoryInterface {

    private pg: Sql
    constructor() {
        this.pg = PgUtils.connect()
    }

    public async getAll(): Promise<Environment[]> {
        return this.pg`select * from environments`.then((rows: RowList<Row[]>) => {
            if (rows.length > 0) {
                return rows.map((row: Row) =>
                    EnvironmentFactory.create(row.id, row.name, row.details, row.created_at, row.updated_at),
                )
            }
            return []
        })
    }

    public async getAllWithTips(): Promise<Environment[]> {
        return this.pg`select e.*, t.* from environments as e 
                       join tips as t on t.environment_id = e.id`
            .then(rows => {
                if (rows.length > 0) {
                    return rows.map((row: Row) => {
                            const tips = row.tips.map((tip) => {
                                return TipFactory.create(tip.id, tip.command, tip.description, tip.created_at, tip.updated_at, tip.environmentId)
                            })
                            return EnvironmentFactory.createWithTips(row.id, row.name, row.details, row.createdAt, row.updatedAt, tips)
                        }
                    )
                }
                return []
            })
    }

    public async store(environmentCreateRequestDTO: EnvironmentCreateRequestDTO): Promise<Environment> {
        return this.pg`insert into environment
            (name, details) values
            (${environmentCreateRequestDTO.name}, ${environmentCreateRequestDTO.details}) returning id, name, details, created_at, updated_at`
            .then(rows => {
                if (rows.length > 0) {
                    return EnvironmentFactory.create(rows[0].id, rows[0].name, rows[0].deatils, rows[0].created_at, rows[0].updated_at)
                }
                return null
            })
    }
}
