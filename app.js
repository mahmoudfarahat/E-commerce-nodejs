 
 const express = require('express');
 const app = express();
const path = require('path')
const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');

// const bodyParser = require('body-parser')
app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))

//  app.use(bodyParser.urlencoded())    
 app.use(express.urlencoded({ extended: true }))
 
 
 app.use('/admin',adminRoutes);
 app.use(shopRoutes);



 app.use((req, res,next)=>{
    //  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
 })
 

app.listen(3000);
