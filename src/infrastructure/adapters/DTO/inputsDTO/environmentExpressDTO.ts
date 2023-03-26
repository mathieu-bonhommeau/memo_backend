import EnvironmentDTOInterface from '../../../../application/DTO/inputs/environmentDTOInterface'
import Environment from '../../../../domain/models/Environment'
import EnvironmentFactory from '../../../../application/factories/environmentFactory'

export default class EnvironmentExpressDTO implements EnvironmentDTOInterface {
    public constructor(public name: string, public details: string) {}

    public format(): Environment {
        return EnvironmentFactory.create(null, this.name, this.details, new Date(), new Date())
    }
}
