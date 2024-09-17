import express from 'express'
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productController';

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProductProduct);
productRouter.post('/single', singleProductProduct);
productRouter.get('/list', listProductProduct);


export default productRouter;
