import EnvironmentDTOInterface from "../../../application/DTO/environmentDTOInterface";
import Environment from "../../../domain/models/Environment";
import EnvironmentFactory from "../../../application/factories/environmentFactory";

export default class EnvironmentExpressDTO implements EnvironmentDTOInterface {
    public constructor(public name: string, public description: string) {}

    public format(): Environment {
        return EnvironmentFactory.create(this.name, this.description, new Date(), new Date())
    }
}