
import * as dotenv from 'dotenv'
import SequelizeUtils from "./sequelizeUtils";
import TipsSequelize from "../adapters/models/tips/tipsSequelize";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const installDb = async () => {
    try {
        const rootPg = SequelizeUtils.rootConnect()
        await rootPg.query('SELECT pg_terminate_backend(pg_stat_activity.pid)\n' +
            'FROM pg_stat_activity\n' +
            'WHERE pg_stat_activity.datname = \'memo_backend\';')
        await rootPg.query(`DROP DATABASE IF EXISTS ${process.env.POSTGRES_DB}`)
        await rootPg.query(`CREATE DATABASE ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)
        await rootPg.close()
        const pg = await SequelizeUtils.connect()
        await TipsSequelize.sync()
        await pg.close()

    } catch (error) {
        console.log(error)
    }
}