import Tips from '../models/Tips'

export default interface TipsFactoryInterface {
    create(tips: string, description: string): Tips
}
