import Tips from '../../../../domain/models/Tips'
import TipsSequelize from './tipsSequelize'
import { DataTypes, literal, Sequelize } from 'sequelize'

export default class TipsSequelizeMapper {
    constructor(private db: Sequelize, private tips: Tips) {}

    synchronize(): boolean {
        try {
            TipsSequelize.build({
                tips: this.tips.tips,
                description: this.tips.description,
                createdAt: this.tips.createdAt,
                updatedAt: this.tips.updatedAt,
            })
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}
