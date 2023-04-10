import TipRepositoryPostgres from '../adapters/tipRepositoryPostgres'
import TipService from '../../application/services/tipService'
import {Container, Inject, Service} from 'typedi'
import TipsRequest from '../../application/requests/tip/tipsRequest'
import Tip from '../../domain/models/Tip'
import PaginateResponse from '../../application/responses/paginateResponse'
import TipResponse from '../../application/responses/tip/tipResponse'
import TipCreateRequest from '../../application/requests/tip/tipCreateRequest'
import ActionResponse from "../../application/responses/actionResponse";

@Service()
export default class TipController {
    constructor(
        @Inject()
        private tipService: TipService,
    ) {}
    public async getAll(req, res) {
        try {
            const tipsRequest: TipsRequest = TipsRequest.buildWithParams(req.params)
            const tips: Tip[] = await this.tipService.provideAll(Container.get(TipRepositoryPostgres))
            const response: PaginateResponse = new TipResponse().buildWithPagination(tipsRequest, tips)

            if (response) {
                return res.status(200).json(response.paginate())
            }
        } catch (err) {
            console.error(err)
        }
    }
    public async store(req, res) {
        try {
            const tipCreateRequest: TipCreateRequest = TipCreateRequest.buildWithBody(req.body)
            const newTip: Tip = await this.tipService.store(Container.get(TipRepositoryPostgres), tipCreateRequest)
            const response: ActionResponse = new TipResponse().buildForCreation(newTip)

            if (response) {
                return res.status(201).json(response)
            }
        } catch (err) {
            return res.status(400).json({ message: 'Bad request' })
        }
    }
}
