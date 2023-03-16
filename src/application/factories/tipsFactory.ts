import Tips from '../../domain/models/Tips'

export default class TipsFactory {
    public static create(tips: string, description: string, createdAt: Date, updatedAt: Date): Tips {
        return new Tips(tips, description, createdAt, updatedAt)
    }
}
