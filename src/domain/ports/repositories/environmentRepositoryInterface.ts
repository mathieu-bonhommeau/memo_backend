import Environment from '../../models/Environment'

export default interface EnvironmentRepositoryInterface {
    getAll(): Promise<Array<Environment>>
}
