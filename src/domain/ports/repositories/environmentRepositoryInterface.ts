import Environment from '../../models/Environment'
import EnvironmentDTOInterface from "../../../application/DTO/environmentDTOInterface";

export default interface EnvironmentRepositoryInterface {
    getAll(): Promise<Array<Environment>>
    store(environment: Environment): Promise<Environment>
}
