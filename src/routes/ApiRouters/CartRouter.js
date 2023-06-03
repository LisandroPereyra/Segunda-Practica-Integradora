import { Router } from "express";
import CartManager from "../../dao/classes/MongoDB/CartManager.js"
import Utils from '../../utils/utils.js'

const CartRouter = Router()

CartRouter
.post('/me/createCart', Utils.authJWTMiddleware(['admin', 'user']), CartManager.createCart)
.get('/me/getCart/:id', Utils.authJWTMiddleware(['admin', 'user']), CartManager.getCart)
.post('/me/addProduct/:cid/:pid', Utils.authJWTMiddleware(['admin', 'user']), CartManager.addProduct)
.put('/me/addProductQuantity/:cid/:pid', Utils.authJWTMiddleware(['admin', 'user']), CartManager.addProductQuantity)
//.post("/addProducts/:cid", CartManager.addProducts)
.delete('/me/deleteProduct/:cid/:pid', Utils.authJWTMiddleware(['admin', 'user']), CartManager.deleteProduct)
.delete('/me/deleteCart/:cid', Utils.authJWTMiddleware(['admin', 'user']), CartManager.deleteCart)

export default CartRouter;
//http://localhost:8080/api/carts/addProduct/644feb8dd3e6c3674120a628/643da7fe8bfdc8e12f5e5fa9