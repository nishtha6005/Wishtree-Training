let express = require('express')
let CartController = require('../controller/cart')

let router=express.Router()

router.get('/:id',CartController.cartData);

router.post('/add/:id',CartController.addToCart)

router.delete('/remove/:id',CartController.removeCart)

router.delete('/empty/:id',CartController.emptyCart)

router.put('/:id',CartController.updateQuantity)

module.exports = router