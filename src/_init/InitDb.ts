import PgUtils from '../_common/pgUtils'

export default class InitDb {
    public static async init() {
        try {
            const rootPg = PgUtils.rootConnect()
            await rootPg`SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity
                         WHERE pg_stat_activity.datname = ${process.env.POSTGRES_DB};`
            await rootPg`DROP DATABASE IF EXISTS ${rootPg(process.env.POSTGRES_DB)};`
            await rootPg`CREATE DATABASE ${rootPg(process.env.POSTGRES_DB)}
                         OWNER ${rootPg(process.env.POSTGRES_USER)};`
            await rootPg.end()
            const pg = await PgUtils.connect()
            return await pg.file(__dirname + '/../sql/schema.sql')

        } catch (error) {
            console.log(error)
        }
    }
}
