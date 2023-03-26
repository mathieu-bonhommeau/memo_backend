import Install from './infrastructure/database/install'
import EnvironmentController from './infrastructure/controllers/environmentController'
import TipController from './infrastructure/controllers/tipController'
const express = require('express')
const router = express.Router()

//! route a enlever et faire un systeme de migration
router.get('/install-db', Install.installDb)

router.get('/tips', TipController.getAll)
router.post('/tips', TipController.store)
router.get('/environments', EnvironmentController.getAll)
router.get('/environments-tips', EnvironmentController.getAllWithTips)
router.post('/environments', EnvironmentController.store)

module.exports = router
