import { Sequelize } from 'sequelize'
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export default class SequelizeUtils {
    public connect(): Sequelize {
        return new Sequelize(
            `${process.env.POSTGRES_DB as string}`,
            `${process.env.POSTGRES_USER as string}`,
            `${process.env.POSTGRES_PASSWORD as string}`,
            {
                host: `${process.env.POSTGRES_HOST as string}`,
                port: parseInt(process.env.POSTGRES_PORT as string),
                dialect: 'postgres',
            },
        )
    }

    public rootConnect(): Sequelize {
        return new Sequelize(
            `postgres`,
            `${process.env.POSTGRES_USER as string}`,
            `${process.env.POSTGRES_PASSWORD as string}`,
            {
                host: `${process.env.POSTGRES_HOST as string}`,
                port: parseInt(process.env.POSTGRES_PORT as string),
                dialect: 'postgres',
            },
        )
    }
}
