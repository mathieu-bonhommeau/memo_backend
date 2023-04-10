import Environment from '../../models/Environment'
import EnvironmentCreateRequest from '../../../application/requests/environment/environmentCreateRequest'

export default interface EnvironmentRepositoryInterface {
    getAll(): Promise<Environment[]>
    getAllWithTips(): Promise<Environment[]>
    store(environmentCreateRequest: EnvironmentCreateRequest): Promise<Environment>
}
