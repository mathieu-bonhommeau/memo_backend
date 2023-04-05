// Define all attribute available for the model
import { DataTypes, literal, Model, Optional } from 'sequelize'
import SequelizeUtils from '../../../database/pgUtils'
import EnvironmentSequelize from '../environment/environmentSequelize'

const db = SequelizeUtils.connect()
interface TipAttributes {
    id: number
    command: string
    description: string
    environmentId: number
    createdAt: Date
    updatedAt: Date
}
// Define the object we can pass to model.create() with id which is optional
export interface TipInput extends Optional<TipAttributes, 'id'> {}
// Define the object which is return by model.create()
export interface TipOuput extends Required<TipAttributes> {}

export default class TipSequelize extends Model<TipAttributes, TipInput> {
    public id!: number
    public command: string
    public description: string
    public environmentId: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

TipSequelize.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        command: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        environmentId: {
            type: DataTypes.INTEGER,
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
        tableName: 'tips',
    },
)

TipSequelize.belongsTo(EnvironmentSequelize, {
    foreignKey: 'environmentId',
    as: 'environment',
})

EnvironmentSequelize.hasMany(TipSequelize, {
    foreignKey: 'environmentId',
    as: 'tips',
})
