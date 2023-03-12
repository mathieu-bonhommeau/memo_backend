import TipsRepositoryInterface from '../../../domain/ports/repositories/tipsRepositoryInterface'
import Tips from '../../../domain/models/Tips'
import RootModel from '../../../domain/models/rootModel'

export default abstract class Provider {
    protected constructor(protected readonly tipsRepository: TipsRepositoryInterface) {}
    abstract provideAll(): Promise<Array<RootModel>>
}
