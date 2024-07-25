require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productsRoutes.js')

// const Products = require('./models/productModel')
const app = express()


app.set("view engine", "ejs");


mongoose.connect(process.env.DB_LOCAL)
.then(()=>{
    app.listen(process.env.PORT,()=>{console.log('connected to db and running on port:5000')})
})
.catch((err)=>{
    console.log(err)
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

//Routes

// app.get('/new' ,(req,res)=>{
//     res.sendFile( __dirname+'/views/form.html')
// })

app.use('/',productRouter)



