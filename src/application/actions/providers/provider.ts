import TipsRepositoryInterface from '../../../domain/ports/repositories/tipsRepositoryInterface'
import RootModel from "../../../domain/models/RootModel";

export default abstract class Provider {
    protected constructor(protected readonly tipsRepository: TipsRepositoryInterface) {}
    abstract provideAll(): Promise<Array<RootModel>>
}
