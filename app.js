 
 const express = require('express');
 const app = express();
const path = require('path')
const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');
const errorController =require('./controllers/error.controller')
// const bodyParser = require('body-parser')
app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))

//  app.use(bodyParser.urlencoded())    
 app.use(express.urlencoded({ extended: true }))
 
 
 app.use('/admin',adminRoutes);
 app.use(shopRoutes);



 app.use(errorController.get404)
 

app.listen(3000);
