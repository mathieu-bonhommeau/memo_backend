import RootModel from './RootModel'

export default class Environment extends RootModel {
    constructor(
        id: string,
        public name: string,
        public details: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id, createdAt, updatedAt)
    }
}
