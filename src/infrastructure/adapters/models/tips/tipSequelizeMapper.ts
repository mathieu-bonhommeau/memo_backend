import Tip from '../../../../domain/models/Tip'
import { Sequelize } from 'sequelize'
import TipSequelize from './tipSequelize'

export default class TipSequelizeMapper {
    constructor(private db: Sequelize, private Tips: Tip) {}

    public synchronize(): boolean {
        try {
            TipSequelize.build({
                command: this.Tips.command,
                description: this.Tips.description,
                createdAt: this.Tips.createdAt,
                updatedAt: this.Tips.updatedAt,
            })
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}
