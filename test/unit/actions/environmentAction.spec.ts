import EnvironmentRepositoryStub from "../../stubs/environmentRepositoryStub";
import EnvironmentAction from "../../../src/application/actions/environmentAction";
import EnvironmentExpressDTO from "../../../src/infrastructure/adapters/DTO/environmentExpressDTO";
import {environmentsMock} from "../../mocks/environments";

describe("Environment action tests", () => {
    test("should create a new environment", async () => {

        const environmentDTO = new EnvironmentExpressDTO('Git', "Logiciel de conte de version")
        /*environmentDTO.createdAt = new Date('2022-10-15')
        environmentDTO.updatedAt = new Date('2022-10-15')*/
        const environmentAction = new EnvironmentAction(new EnvironmentRepositoryStub(), environmentDTO)
        const newEnvironment = await environmentAction.store()
        console.log(newEnvironment)
        //console.log(environmentsMock)
        expect(newEnvironment).toEqual(environmentsMock)
    })
})