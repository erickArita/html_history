const express = require('express');
const path = require('path') 
const app = express();
const routes = require('./routes/index')

// settings
app.set('port',process.env.PORT || 3000)

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')
// middewares
 
app.use(express.urlencoded({extended:false}))
// routes

app.use(routes)

// static files
app.use(express.static(path.join(__dirname,'../node_modules')))
app.use(express.static(path.join(__dirname,'./public')))

// 404
app.use((req,res)=>{
    res.status(404).render('404')
})
app.listen(app.get('port') , ()=>{
    console.log('server on port ',app.get('port'))
})