import EnvironmentController from './infrastructure/controllers/environmentController'
import TipController from './infrastructure/controllers/tipController'
import express from 'express'
import { Container } from 'typedi'
const router = express.Router()

router.get('/tips', Container.get(TipController).getAll)
router.post('/tips', Container.get(TipController).store)
router.get('/environments', Container.get(EnvironmentController).getAll)
router.get('/environments-tips', Container.get(EnvironmentController).getAllWithTips)
router.post('/environments', Container.get(EnvironmentController).store)

export default router
