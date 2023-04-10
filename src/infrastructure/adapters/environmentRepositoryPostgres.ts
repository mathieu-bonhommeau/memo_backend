import EnvironmentRepositoryInterface from '../../domain/ports/repositories/environmentRepositoryInterface'
import Environment from '../../domain/models/Environment'
import EnvironmentFactory from '../../application/factories/environmentFactory'
import PgUtils from '../../_common/pgUtils'
import { Row, RowList, Sql } from 'postgres'
import { Service } from 'typedi'
import TipFactory from '../../application/factories/tipFactory'
import EnvironmentCreateRequest from '../../application/requests/environment/environmentCreateRequest'

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
        const environmentsWithTips = []
        const environmentsRows = await this.pg`select * from environments`
        if (environmentsRows.length > 0) {
            for (let i = 0; i < environmentsRows.length - 1; i++) {
                const tipsByEnvironmentRows = await this
                    .pg`select * from tips where tips.environment_id = ${environmentsRows[i].id}`
                environmentsWithTips.push(
                    EnvironmentFactory.createWithTips(
                        environmentsRows[i].id,
                        environmentsRows[i].name,
                        environmentsRows[i].details,
                        environmentsRows[i].created_at,
                        environmentsRows[i].updated_at,
                        tipsByEnvironmentRows.map((tip) => {
                            return TipFactory.create(
                                tip.id,
                                tip.command,
                                tip.description,
                                tip.created_at,
                                tip.updated_at,
                                tip.environment_id,
                            )
                        }),
                    ),
                )
            }
            return environmentsWithTips
        }
        return []
    }

    public async store(environmentCreateRequest: EnvironmentCreateRequest): Promise<Environment> {
        return this.pg`insert into environments
            (name, details) values
            (${environmentCreateRequest.name}, ${environmentCreateRequest.details}) returning id, name, details, created_at, updated_at`.then(
            (rows) => {
                if (rows.length > 0) {
                    return EnvironmentFactory.create(
                        rows[0].id,
                        rows[0].name,
                        rows[0].deatils,
                        rows[0].created_at,
                        rows[0].updated_at,
                    )
                }
                return null
            },
        )
    }
}
