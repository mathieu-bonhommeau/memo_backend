import PgUtils from '../_common/pgUtils'
import { faker } from '@faker-js/faker/locale/fr'

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
            await pg.end()
        } catch (error) {
            console.log(error)
        }
    }

    public static async seed() {
        try {
            const pg = await PgUtils.connect()
            for (let i = 0; i < 30; i++) {
                await pg`insert into environments 
                    ("name", "details") VALUES 
                    (${faker.helpers.unique(faker.word.noun)}, ${faker.lorem.text()}) returning id`.then(
                    async (rows) => {
                        console.log(rows[0].id)
                        for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
                            await pg`insert into tips 
                        ("command", "description", "environment_id") VALUES 
                        (${faker.hacker.ingverb()} ,${faker.lorem.text()}, ${rows[0].id})`
                        }
                    },
                )
            }
            return true
        } catch (error) {
            console.log(error)
        }
    }
}
