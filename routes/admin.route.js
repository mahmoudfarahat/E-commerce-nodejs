const path = require('path');

const express =require('express');

const productsController =require('../controllers/products.controller')
// const rootDir = require('../util/path')

const router =express.Router();
 
router.get('/add-product', productsController.getAddProduct);


router.get('/products');


 router.post('/add-product', productsController.postAddProduct );


module.exports = router