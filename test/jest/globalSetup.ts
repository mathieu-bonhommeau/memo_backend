import SequelizeUtils from '../../src/infrastructure/database/sequelizeUtils'
import * as dotenv from 'dotenv'
import TipsSequelize from '../../src/infrastructure/adapters/models/tips/tipsSequelize'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = async () => {
    try {
        const rootPg = new SequelizeUtils().rootConnect()
        await rootPg.query(`DROP DATABASE IF EXISTS ${process.env.POSTGRES_DB}`)
        await rootPg.query(`CREATE DATABASE ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)
        await rootPg.close()

        await new SequelizeUtils().connect()
        await TipsSequelize.sync()
    } catch (error) {
        console.log(error)
    }
}
