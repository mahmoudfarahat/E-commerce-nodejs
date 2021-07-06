 
 const express = require('express');
 const app = express();
const path = require('path')
const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');

const bodyParser = require('body-parser')



//  app.use(bodyParser.urlencoded())    
 app.use(express.urlencoded({ extended: true }))
 
 
 app.use('/admin',adminRoutes);
 app.use(shopRoutes);

 app.use((req, res,next)=>{
     res.sendFile(path.join(__dirname,'views','404.html'))
 })
 

app.listen(3000);
