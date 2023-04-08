import Install from './_init/InitDb'
import EnvironmentController from './infrastructure/controllers/environmentController'
import TipController from './infrastructure/controllers/tipController'
import express from 'express'
import {Container} from "typedi"
const router = express.Router()

//! route a enlever et faire un systeme de migration
router.get('/install-db', Install.installDb)

router.get('/tips', TipController.getAll)
router.post('/tips', TipController.store)
router.get('/environments', Container.get(EnvironmentController).getAll)
router.get('/environments-tips', Container.get(EnvironmentController).getAllWithTips)
router.post('/environments', Container.get(EnvironmentController).store)

export default router
