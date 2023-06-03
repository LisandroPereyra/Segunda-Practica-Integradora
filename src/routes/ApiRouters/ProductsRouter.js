import { Router } from "express";
import ProductsManager from "../../dao/classes/MongoDB/ProductManager.js"
import Utils from '../../utils/utils.js'

const ProductsRouter = Router()

ProductsRouter
.get('/me/getProducts', Utils.authJWTMiddleware(['admin', 'user']), ProductsManager.getProducts)
.get('/getProductById/:id', Utils.authJWTMiddleware(['admin']), ProductsManager.getProductById)
.post('/addProduct', Utils.authJWTMiddleware(['admin']), ProductsManager.addProduct)
.put('/updateProduct/:id', Utils.authJWTMiddleware(['admin']), ProductsManager.updateProduct)
.delete('/deleteProduct/:id', Utils.authJWTMiddleware(['admin']), ProductsManager.deleteProduct)

export default ProductsRouter;

//http://localhost:8080/api/products/updateProduct/:id