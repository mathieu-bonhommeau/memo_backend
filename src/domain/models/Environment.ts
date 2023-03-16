import RootModel from './RootModel'

export default class Environment extends RootModel {
    constructor(public name: string, public details: string, createdAt: Date, updatedAt: Date) {
        super(createdAt, updatedAt)
    }
}