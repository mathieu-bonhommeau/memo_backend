import PaginateResponse from "../../../src/application/outputs/paginateResponse";
import RequestInput from "../../../src/application/inputs/requestInput";
import TipsRequestInput from "../../../src/application/inputs/tipsRequestInput";

describe('Pagination response', () => {
    test("should return an object with metadata for pagination", () => {
        const requestInput = new TipsRequestInput() // Créer un mock qui étends de requestInput
        const pagination = new PaginateResponse()
    })
})