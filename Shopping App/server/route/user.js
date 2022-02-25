var express = require('express')

var UserController = require('../controller/user')

var router = express.Router();

router.get('/all',UserController.allUsers);

router.get('/:email',UserController.userById);

router.post('/add',UserController.addUser);

router.put('/update/:email',UserController.updateUser);

router.delete('/delete/:email',UserController.deleteUser);

// router.put('/cart/:id',UserController.addToCart)

// router.delete('/cart/:id',UserController.editCart)

module.exports = router;