var express = require('express')

var ProductController = require('../controller/product')

var router = express.Router();

router.get('/search',ProductController.search);

router.get('/all',ProductController.allProducts);

router.get('/:id',ProductController.productById);

router.post('/add',ProductController.addProduct);

router.put('/update/:id',ProductController.updateProduct);

router.delete('/delete/:id',ProductController.deleteProduct);

module.exports = router;