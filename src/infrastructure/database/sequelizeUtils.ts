import { Sequelize } from 'sequelize'
require('dotenv').config()
export default class SequelizeUtils {
    public db: string  = process.env.POSTGRES_DB as string
    public password: string = process.env.POSTGRES_PASSWORD as string
    public host: string = process.env.POSTGRES_HOST as string
    public user: string = process.env.POSTGRES_USER as string
    public port: string = process.env.POSTGRES_PORT as string

    public connect(): Sequelize {
        return new Sequelize(this.db, this.user, this.password, {
            host: this.host,
            port: parseInt(this.port),
            dialect: 'postgres',
        })
    }
}
