import TipsController from "./infrastructure/controllers/tipsController";
const express = require('express')
const router = express.Router()

router.get('/tips', TipsController.getAll)

module.exports = router