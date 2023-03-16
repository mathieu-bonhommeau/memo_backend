import RootModel from './RootModel'

export default class Tips extends RootModel {
    constructor(public tips: string, public description: string, createdAt: Date, updatedAt: Date) {
        super(createdAt, updatedAt)
    }
}
