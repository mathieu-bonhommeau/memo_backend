export default abstract class RootModel {

    protected _id: string
    protected _created_at: Date
    protected _updated_at: Date

    get id(): string {
        return this._id;
    }

    public setId(value: string): RootModel {
        this._id = value
        return this
    }

    get created_at(): Date {
        return this._created_at;
    }

    public setCreatedAt(value: Date): RootModel {
        this._created_at = value
        return this
    }

    get updated_at(): Date {
        return this._updated_at
    }

    public setUpdatedAt(value: Date): RootModel {
        this._updated_at = value
        return this
    }
}
