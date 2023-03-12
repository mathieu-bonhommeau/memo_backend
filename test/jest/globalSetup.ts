import SequelizeUtils from '../../src/infrastructure/database/sequelizeUtils'
import * as dotenv from 'dotenv'
import TipsSequelize from "../../src/infrastructure/adapters/models/tips/tipsSequelize";
import * as path from "path";
dotenv.config({ path: `.env.${process.env.NODE_ENV}`})

console.log(process.env.NODE_ENV)

module.exports = async () => {
    try {
        const pg = new SequelizeUtils().connect()
        await pg.query(`CREATE DATABASE ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)

        await TipsSequelize.sync()
    } catch (error) {
        console.log(error)
    }
}
