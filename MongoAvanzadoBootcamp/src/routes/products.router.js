import { Router } from "express";
import productsModel from "../models/products.js";


const router = Router();

router.get('/',async(req,res)=>{
    const products = await productsModel.find();
    res.send({payload:products})
})

router.post('/',async (req,res)=>{
    const {title,price,code} = req.body;
    const product = {
        code,
        price,
        title
    }
    const result = await productsModel.create(product);
    res.send({payload:result})
})

export default router;