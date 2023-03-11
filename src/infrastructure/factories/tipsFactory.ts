import TipsFactoryInterface from '../factories/tipsFactoryInterface'
import Tips from '../../domain/models/Tips'

export default class TipsFactory implements TipsFactoryInterface {
    static create(tips: string, description: string): Tips {
        return new Tips(tips, description)
    }
}
