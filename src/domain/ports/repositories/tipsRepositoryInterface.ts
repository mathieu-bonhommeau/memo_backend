import Tips from '../../models/Tips'

export default interface TipsRepositoryInterface {
    getAll(): Promise<Array<Tips>>
}
