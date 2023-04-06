import PaginateResponse from '../../../src/application/responses/paginateResponse'
import RequestInputStub from '../../stubs/requestInputStub'
import { tipsMocks } from '../../mocks/tips'

describe('Pagination response', () => {
    test('should return an object with metadata for pagination', () => {
        const requestInputStub = new RequestInputStub(0, 10, 'asc')

        const pagination = new PaginateResponse(requestInputStub, tipsMocks)

        expect(pagination.paginate()).toEqual({
            data: tipsMocks,
            metadata: {
                start: 0,
                length: 10,
                recordsTotal: 3,
                order: 'asc',
            },
        })
    })
})
