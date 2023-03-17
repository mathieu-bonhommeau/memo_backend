import RootModel from './RootModel'

export default class Tip extends RootModel {
    constructor(
        public command: string,
        public description: string,
        public environmentId: number,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(createdAt, updatedAt)
    }
}
