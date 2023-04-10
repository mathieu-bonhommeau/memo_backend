import RootModel from './RootModel'
import Tip from './Tip'

export default class Environment extends RootModel {
    private _name: string
    private _details: string
    private _tips: Tip[]

    constructor() {
        super()
    }

    get id(): string {
        return this._id
    }

    public setId(value: string): Environment {
        this._id = value
        return this
    }

    get name(): string {
        return this._name
    }

    public setName(value: string): Environment {
        this._name = value
        return this
    }

    get details(): string {
        return this._details
    }

    public setDetails(value: string): Environment {
        this._details = value
        return this
    }

    get created_at(): Date {
        return this._created_at
    }

    public setCreatedAt(value: Date): Environment {
        this._created_at = value
        return this
    }

    get updated_at(): Date {
        return this._updated_at
    }

    public setUpdatedAt(value: Date): Environment {
        this._updated_at = value
        return this
    }

    get tips(): Tip[] {
        return this._tips
    }

    public addTip(tip: Tip): Environment {
        this._tips.push(tip)
        return this
    }

    public setTips(tips: Tip[]): Environment {
        this._tips = tips
        return this
    }
}
