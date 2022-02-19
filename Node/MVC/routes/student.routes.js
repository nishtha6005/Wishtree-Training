var express = require('express');
var studentController = require('../controller/student.controller')

var router = express.Router();

router.get('/',studentController.home);

router.get('/:id',studentController.single)

router.post('/create',studentController.create)

router.delete('/delete/:id',studentController.remove)

module.exports = router