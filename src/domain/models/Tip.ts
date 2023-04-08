import RootModel from './RootModel'
import Environment from "./Environment";

export default class Tip extends RootModel {
    private _command: string
    private _description: string
    private _environment_id: string

    constructor() {
        super()
    }

    get id(): string {
        return this._id
    }

    public setId(value: string): Tip {
        this._id = value
        return this
    }

    get command(): string {
        return this._command;
    }

    public setCommand(value: string): Tip {
        this._command = value
        return this
    }

    get description(): string {
        return this._description;
    }

    public setDescription(value: string): Tip  {
        this._description = value
        return this
    }

    get created_at(): Date {
        return this._created_at;
    }

    public setCreatedAt(value: Date): Tip {
        this._created_at = value
        return this
    }

    get updated_at(): Date {
        return this._updated_at
    }

    public setUpdatedAt(value: Date): Tip {
        this._updated_at = value
        return this
    }

    get environment(): string {
        return this._environment_id;
    }

    public setEnvironmentId(environment_id: string): Tip {
        this._environment_id = environment_id
        return this
    }
}
