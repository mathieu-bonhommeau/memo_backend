import Tip from '../../../../domain/models/Tip'
import { Sequelize } from 'sequelize'
import TipSequelize from './tipSequelize'

export default class TipSequelizeMapper {
    constructor(private db: Sequelize, private tip: Tip) {}

    public synchronize(): TipSequelize {
        return TipSequelize.build({
            command: this.tip.command,
            description: this.tip.description,
            environmentId: this.tip.environmentId,
            createdAt: this.tip.createdAt,
            updatedAt: this.tip.updatedAt,
        })
    }
}
