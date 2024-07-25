const express = require('express')
const {getPage, getProducts,createProduct,deleteProduct,getCategoryPage,updateProduct,getAddProdPage,getEditPage,getCategory} = require('../controllers/productsControllers')

const router = express.Router()

//GET
 router.get('/',getPage)
 router.get('/new',getAddProdPage)
 router.get('/category',getCategoryPage)
 router.get('/edit/:id',getEditPage)
 router.get('/category/:category',getCategory)

//  router.get('/products/:id',getSingleDocs)

 router.get('/products',getProducts)

//POST
router.post('/new',createProduct)

//DEL
router.delete('/:id',deleteProduct)

//UPDATE
router.post('/update/:id',updateProduct)

 module.exports = router