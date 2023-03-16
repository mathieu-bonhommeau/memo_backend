import SequelizeUtils from './sequelizeUtils'
import EnvironmentSequelize from '../adapters/models/environment/environmentSequelize'
import TipSequelize from '../adapters/models/tips/tipSequelize'

export default class Install {
    public static async installDb(req: any, res: any) {
        console.log('ici')
        try {
            const rootPg = SequelizeUtils.rootConnect()
            await rootPg.query(
                'SELECT pg_terminate_backend(pg_stat_activity.pid)\n' +
                    'FROM pg_stat_activity\n' +
                    "WHERE pg_stat_activity.datname = 'memo_backend';",
            )
            await rootPg.query(`DROP DATABASE IF EXISTS ${process.env.POSTGRES_DB}`)
            await rootPg.query(`CREATE DATABASE ${process.env.POSTGRES_DB} OWNER ${process.env.POSTGRES_USER}`)
            await rootPg.close()
            const pg = await SequelizeUtils.connect()
            await TipSequelize.sync()
            await EnvironmentSequelize.sync()
            await pg.close()

            return res.status(200).send('Db installée !')
        } catch (error) {
            console.log(error)
        }
    }
}
