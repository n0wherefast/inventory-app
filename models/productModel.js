const moongoose = require('mongoose')

const Schema = moongoose.Schema

const productsSchema =  new Schema({
     title:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     category:{
        type:String,
        required:true
     },
     image:{
        type:String,
        required:true
     },
     rating:{
        rate:{
            type:Number
        },
        count:{
            type:Number}
     },
},{timestamps:true})

module.exports = moongoose.model('Products',productsSchema)