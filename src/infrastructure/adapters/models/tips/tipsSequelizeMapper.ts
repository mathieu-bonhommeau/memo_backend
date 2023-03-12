import Tips from "../../../../domain/models/Tips";
import TipsSequelize from "./tipsSequelize";
import {DataTypes, literal, Sequelize} from "sequelize";

export default class TipsSequelizeMapper {
    constructor(private db: Sequelize, private tips: Tips){}

    synchronize(): boolean {
        try {
            TipsSequelize.build({
                tips: this.tips.tips,
                description: this.tips.description,
                createdAt: this.tips.createdAt,
                updatedAt: this.tips.updatedAt,
            })

            TipsSequelize.init(
                {
                    id: {
                        type: DataTypes.INTEGER.UNSIGNED,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    tips: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    description: {
                        type: DataTypes.TEXT,
                        allowNull: false,
                    },
                    createdAt: {
                        type: DataTypes.DATE,
                        defaultValue: literal('CURRENT_TIMESTAMP'),
                        allowNull: false,
                    },
                    updatedAt: {
                        type: DataTypes.DATE,
                        allowNull: true,
                    },
                },
                {
                    timestamps: true,
                    sequelize: this.db,
                    tableName: 'tips',
                },
            )
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}