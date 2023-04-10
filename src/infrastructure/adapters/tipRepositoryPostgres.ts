import TipRepositoryInterface from '../../domain/ports/repositories/tipRepositoryInterface'
import Tip from '../../domain/models/Tip'
import TipFactory from '../../application/factories/tipFactory'
import { Service } from 'typedi'
import { Row, RowList, Sql } from 'postgres'
import PgUtils from '../../_common/pgUtils'
import TipCreateRequest from "../../application/requests/tip/tipCreateRequest";

export default class TipRepositoryPostgres implements TipRepositoryInterface {
    private pg: Sql
    constructor() {
        this.pg = PgUtils.connect()
    }

    public async getAll(): Promise<Tip[]> {
        return this.pg`select * from tips`.then((rows: RowList<Row[]>) => {
            if (rows.length > 0) {
                return rows.map((row: Row) => {
                    return TipFactory.create(
                        row.id,
                        row.command,
                        row.description,
                        row.environment_id,
                        row.created_at,
                        row.updated_at,
                    )
                })
            }
            return []
        })
    }

    public async store(tipCreateRequest: TipCreateRequest): Promise<Tip> {
        return this.pg`insert into tips 
                       (command, description, environment_id) values 
                       (${tipCreateRequest.command}, ${tipCreateRequest.description}, ${tipCreateRequest.environment_id})
                       returning id, command, description, environment_id, created_at, updated_at`.then((rows) => {
            if (rows.length > 0) {
                return TipFactory.create(
                    rows[0].id,
                    rows[0].command,
                    rows[0].description,
                    rows[0].environment_id,
                    rows[0].created_at,
                    rows[0].updated_at,
                )
            }
            return null
        })
    }
}
