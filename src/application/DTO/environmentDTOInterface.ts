import Environment from '../../domain/models/Environment'

export default interface EnvironmentDTOInterface {
    name: string
    details: string

    format(): Environment
}
