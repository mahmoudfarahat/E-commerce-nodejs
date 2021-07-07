const express =require('express')
const router =express.Router();
const path = require('path')
 
const productsController = require('../controllers/products.controller')

router.get('/',productsController.getProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');

 


 module.exports = router