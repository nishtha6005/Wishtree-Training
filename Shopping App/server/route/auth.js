let express = require('express')
let AuthController = require('../controller/auth')

let router=express.Router()

router.post('/login',AuthController.login);

router.post('/signup',AuthController.signUp);

module.exports = router