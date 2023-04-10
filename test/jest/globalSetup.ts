import * as dotenv from 'dotenv'
import PgUtils from '../../src/_common/pgUtils'
import { Sql } from 'postgres'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = async () => {
    try {
        const rootPg: Sql = await PgUtils.rootConnect()
        await rootPg`SELECT pg_terminate_backend(pg_stat_activity.pid)
                     FROM pg_stat_activity
                     WHERE pg_stat_activity.datname = ${process.env.POSTGRES_DB}`
        await rootPg`DROP DATABASE IF EXISTS ${rootPg(process.env.POSTGRES_DB)}`
        await rootPg`CREATE DATABASE ${process.env.POSTGRES_DB as string} OWNER ${process.env.POSTGRES_USER as string}`
        return await rootPg.file(__dirname + '/../sql/schema.sql')

    } catch (error) {
        console.log(error)
    }
}
