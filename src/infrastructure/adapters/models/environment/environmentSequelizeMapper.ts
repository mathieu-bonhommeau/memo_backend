import { Sequelize } from 'sequelize'
import Environment from '../../../../domain/models/Environment'
import EnvironmentSequelize from './environmentSequelize'

export default class EnvironmentSequelizeMapper {
    constructor(private db: Sequelize, private environment: Environment) {}

    public synchronize(): boolean {
        try {
            EnvironmentSequelize.build({
                name: this.environment.name,
                details: this.environment.details,
                createdAt: this.environment.createdAt,
                updatedAt: this.environment.updatedAt,
            })
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}
