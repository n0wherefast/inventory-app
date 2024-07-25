
const Products = require('../models/productModel')
const mongoose = require('mongoose')

const getPage =  (req,res) => {
    res.render("index",{title:"Inventory app"})
    // const absolutePath = __dirname + '/views/index.html'
    // res.sendFile("C:/Users/rigel/OneDrive/Desktop/repo/inventory-app node.js/views/index.html")
}
const getAddProdPage =  (req,res) => {
    res.render("form",{title:"Add Product"})
}
const getCategoryPage =  (req,res) => {
    res.render("category",{title:"Category"})
}

const getCategory = async (req,res) =>{
    const {category} = req.params

    const product = await Products.find({category:category})
    res.status(200).json(product)
    console.log(req.params)
}


const getEditPage = async (req,res) => {
    const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such product'})
        }
    
        const product = await Products.findById({_id:id})
    
            if (!product) { return res.status(404) }

    res.render("edit",{title:"Edit Product",product:product})
}

const getProducts = async (req,res) => {
    const product = await Products.find({}).sort({title:-1})
    res.status(200).json(product)
}

// const getSingleDocs = async (req,res) =>{
//     const { id } = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:'No such product'})
//     }

//     const product = await Products.findById({_id:id})

//         if (!product) { return res.status(404) }

//     res.status(200).json(product) 
// }

//create
const createProduct = async (req,res) => {
    const {title,description,price,category,image,rate,count} = req.body

    try {
        const pruduct = await Products.create({title,description,price,category,image,rate,count})
        // res.status(200).json(pruduct)
        res.redirect('/')
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateProduct = async (req,res) => {
    const { id } = req.params
    console.log(req.body)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }
    const product = await Products.findByIdAndUpdate({_id:id},{...req.body})

        if (!product) { return res.status(404) }
        res.redirect('/')
}


// delete
const deleteProduct = async (req,res) =>{
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }
     const product = await Products.findByIdAndDelete({_id:id})

     if (!product) { return res.status(404) }

     res.status(200).json(product)

}

module.exports = {
    getPage,
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    getAddProdPage,
    getEditPage,
    getCategoryPage,
    getCategory
}