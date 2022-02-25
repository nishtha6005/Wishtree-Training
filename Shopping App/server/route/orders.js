let express = require('express')
let OrdersController = require('../controller/orders')
let router=express.Router()

router.get('/get',OrdersController.getOrders);

router.post('/add',OrdersController.addOrders);

router.delete('/delete/:id',OrdersController.deleteOrders);

module.exports = router