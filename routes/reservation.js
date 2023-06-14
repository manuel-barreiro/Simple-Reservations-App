const express = require('express')
const router = express.Router()
const reservationController = require('../controllers/reservation') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, reservationController.getRes)

router.post('/createRes', reservationController.createRes)

router.delete('/deleteRes', reservationController.deleteRes)

module.exports = router