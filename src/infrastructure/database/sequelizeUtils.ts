import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
import * as process from 'process'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export default class SequelizeUtils {
    public static connect(): Sequelize {
        return new Sequelize(
            `${process.env.POSTGRES_DB as string}`,
            `${process.env.POSTGRES_USER as string}`,
            `${process.env.POSTGRES_PASSWORD as string}`,
            {
                host: `${process.env.POSTGRES_HOST as string}`,
                port: parseInt(process.env.POSTGRES_PORT as string),
                dialect: 'postgres',
                define: {
                    timestamps: process.env.NODE_ENV !== 'test',
                },
            },
        )
    }

    public static rootConnect(): Sequelize {
        return new Sequelize(
            `postgres`,
            `${process.env.POSTGRES_USER as string}`,
            `${process.env.POSTGRES_PASSWORD as string}`,
            {
                host: `${process.env.POSTGRES_HOST as string}`,
                port: parseInt(process.env.POSTGRES_PORT as string),
                dialect: 'postgres',
                define: {
                    timestamps: process.env.NODE_ENV !== 'test',
                },
            },
        )
    }

    public static async truncate(pg: Sequelize): Promise<boolean> {
        try {
            await pg.query('truncate table environments cascade')
            await pg.query('alter sequence environments_id_seq restart with 1')
            await pg.query('truncate table tips cascade')
            await pg.query('alter sequence tips_id_seq restart with 1')
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }
}
