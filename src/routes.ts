import TipsController from "./infrastructure/controllers/tipsController";
import InstallController from "./infrastructure/database/installController";
const express = require('express')
const router = express.Router()

//! route a enlever et faire un systeme de migration
router.get('/install-db', InstallController.installDb)
router.get('/tips', TipsController.getAll)

module.exports = router