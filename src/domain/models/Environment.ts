import RootModel from './RootModel'

export default class Environment extends RootModel {
    constructor(
        public id: number | null,
        public name: string,
        public details: string,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id, createdAt, updatedAt)
    }
}
