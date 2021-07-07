const express =require('express')
const router =express.Router();
const path = require('path')
const rootDir = require('../util/path')
const adminData = require('./admin.route')
router.get('/', (req,res,next)=>{
console.log(adminData.products)
    // res.sendFile(path.join(rootDir,'views','shop.html' ))    
    res.render('shop',{pageTitle: 'shop'})

});



 module.exports = router