import EnvironmentRepositoryInterface from "../../domain/ports/repositories/environmentRepositoryInterface";
import Environment from "../../domain/models/Environment";
import EnvironmentDTOInterface from "../DTO/environmentDTOInterface";

export default class EnvironmentAction {
    constructor(private environmentRepository: EnvironmentRepositoryInterface, private environmentDTO: EnvironmentDTOInterface) {}

    public store(): Promise<Environment> {
        return this.environmentRepository.store(this.environmentDTO.format())
    }
}