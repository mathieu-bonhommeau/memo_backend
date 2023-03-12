import SequelizeUtils from '../../src/infrastructure/database/sequelizeUtils'
import * as dotenv from 'dotenv'
import TipsSequelize from "../../src/infrastructure/adapters/models/tips/tipsSequelize";
dotenv.config()

module.exports = async () => {
    try {
        const pg = new SequelizeUtils().connect()
        await pg.query(`CREATE DATABASE IF NOT EXISTS ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)

        await TipsSequelize.sync()
    } catch (error) {
        console.log(error)
    }
}
