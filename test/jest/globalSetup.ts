import SequelizeUtils from '../../src/_common/pgUtils'
import * as dotenv from 'dotenv'
import EnvironmentSequelize from '../../src/infrastructure/adapters/models/environment/environmentSequelize'
import TipSequelize from '../../src/infrastructure/adapters/models/tips/tipSequelize'
import PgUtils from "../../src/_common/pgUtils";
import {Sql} from "postgres";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = async () => {
    try {
        const rootPg: Sql = await PgUtils.rootConnect()
        await rootPg`SELECT pg_terminate_backend(pg_stat_activity.pid)
                     FROM pg_stat_activity
                     WHERE pg_stat_activity.datname = 'memo_backend_test'`
        await rootPg`DROP DATABASE IF EXISTS ${rootPg(process.env.POSTGRES_DB as string)}`
        await rootPg`CREATE DATABASE ${process.env.POSTGRES_DB as string} OWNER ${process.env.POSTGRES_USER as string}`

        const pg: Sql = await PgUtils.connect()
        // Créer les tables
        await EnvironmentSequelize.sync()
        await TipSequelize.sync()
        await pg.close()
    } catch (error) {
        console.log(error)
    }
}
