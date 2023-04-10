import * as dotenv from 'dotenv'
import * as process from 'process'
import postgres, { Sql } from 'postgres'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export default class PgUtils {
    public static connect(): Sql {
        return postgres({
            host: process.env.POSTGRES_HOST as string,
            port: parseInt(process.env.POSTGRES_PORT as string),
            database: process.env.POSTGRES_DB as string,
            username: process.env.POSTGRES_USER as string,
            password: process.env.POSTGRES_PASSWORD as string,
        })
    }

    public static rootConnect(): Sql {
        return postgres({
            host: process.env.POSTGRES_HOST as string,
            port: parseInt(process.env.POSTGRES_PORT as string),
            database: 'postgres',
            username: process.env.POSTGRES_USER as string,
            password: process.env.POSTGRES_PASSWORD as string,
        })
    }

    public static async truncate(pg: Sql): Promise<boolean> {
        try {
            await pg`truncate table environments cascade`
            await pg`alter sequence environments_id_seq restart with 1`
            await pg`truncate table tips cascade`
            await pg`alter sequence tips_id_seq restart with 1`
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }
}
