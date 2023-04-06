import RootModel from './RootModel'

export default class Tip extends RootModel {
    constructor(
        id: string,
        public command: string,
        public description: string,
        createdAt: Date,
        updatedAt: Date,
        public environmentId: string,
    ) {
        super(id, createdAt, updatedAt)
    }
}
