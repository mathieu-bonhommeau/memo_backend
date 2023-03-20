import RootModel from './RootModel'

export default class Tip extends RootModel {
    constructor(
        public id: number | null,
        public command: string,
        public description: string,
        public environmentId: number,
        createdAt: Date,
        updatedAt: Date,
    ) {
        super(id, createdAt, updatedAt)
    }
}
