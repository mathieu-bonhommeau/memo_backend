import EnvironmentController from './infrastructure/controllers/environmentController'
import TipController from './infrastructure/controllers/tipController'
import express from 'express'
import { Container } from 'typedi'
const router = express.Router()

router.get('/tips', Container.get(TipController).getAll.bind(Container.get(TipController)))
router.post('/tips', Container.get(TipController).store.bind(Container.get(TipController)))
router.get('/environments', Container.get(EnvironmentController).getAll.bind(Container.get(EnvironmentController)))
router.get('/environments-tips', Container.get(EnvironmentController).getAllWithTips.bind(Container.get(EnvironmentController)))
router.post('/environments', Container.get(EnvironmentController).store.bind(Container.get(EnvironmentController)))

export default router
