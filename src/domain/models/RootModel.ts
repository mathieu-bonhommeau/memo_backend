export default abstract class RootModel {
    protected constructor(public id: number | null, public createdAt: Date, public updatedAt: Date) {}
}
