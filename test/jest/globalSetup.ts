import SequelizeUtils from '../../src/infrastructure/database/sequelizeUtils'
import * as dotenv from 'dotenv'
import EnvironmentSequelize from '../../src/infrastructure/adapters/models/environment/environmentSequelize'
import TipSequelize from '../../src/infrastructure/adapters/models/tips/tipSequelize'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = async () => {
    try {
        const rootPg = SequelizeUtils.rootConnect()
        await rootPg.query(
            'SELECT pg_terminate_backend(pg_stat_activity.pid)\n' +
                'FROM pg_stat_activity\n' +
                "WHERE pg_stat_activity.datname = 'memo_backend_test';",
        )
        await rootPg.query(`DROP DATABASE IF EXISTS ${process.env.POSTGRES_DB}`)
        await rootPg.query(`CREATE DATABASE ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)
        await rootPg.close()

        const pg = await SequelizeUtils.connect()
        await EnvironmentSequelize.sync()
        await TipSequelize.sync()
        await pg.close()
    } catch (error) {
        console.log(error)
    }
}
