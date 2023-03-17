import Environment from "../../domain/models/Environment";

export default interface EnvironmentDTOInterface {
    name: string
    description: string

    format(): Environment
}