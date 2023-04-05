// Define all attribute available for the model
import { DataTypes, literal, Model, Optional } from 'sequelize'
import SequelizeUtils from '../../../database/pgUtils'
import Tip from '../../../../domain/models/Tip'

const db = SequelizeUtils.connect()
interface EnvironmentAttributes {
    id: number
    name: string
    details: string
    createdAt: Date
    updatedAt: Date
}
// Define the object we can pass to model.create() with id which is optional
export interface EnvironmentInput extends Optional<EnvironmentAttributes, 'id'> {}
// Define the object which is return by model.create()
export interface EnvironmentOuput extends Required<EnvironmentAttributes> {}

export default class EnvironmentSequelize extends Model<EnvironmentAttributes, EnvironmentInput> {
    public id!: number
    public name: string
    public details: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public tips: Tip[] | null
}

EnvironmentSequelize.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
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
        sequelize: db,
        tableName: 'environments',
    },
)
