// Define all attribute available for the model
import {DataTypes, literal, Model, Optional, Sequelize} from "sequelize";
import SequelizeUtils from "../../../database/sequelizeUtils";
const db = new SequelizeUtils().connect()
interface TipsAttributes {
    id: number;
    tips: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
// Define the object we can pass to model.create() with id which is optional
export interface TipsInput extends Optional<TipsAttributes, 'id'> {}
// Define the object which is return by model.create()
export interface TipsOuput extends Required<TipsAttributes> {}

export default class TipsSequelize extends Model<TipsAttributes, TipsInput> {
    public id!: number
    public tips: string
    public description: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

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
        sequelize: db,
        tableName: 'tips',
    },
)