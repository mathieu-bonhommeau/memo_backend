import TipsController from "./infrastructure/controllers/tipsController";
import Install from "./infrastructure/database/install";
import EnvironmentController from "./infrastructure/controllers/environmentController";
const express = require('express')
const router = express.Router()

//! route a enlever et faire un systeme de migration
router.get('/install-db', Install.installDb)

router.get('/tips', TipsController.getAll)
router.get('/environment', EnvironmentController.getAll)

module.exports = router