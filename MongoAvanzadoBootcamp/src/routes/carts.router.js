import { Router } from "express";
import cartsModel from "../models/carts.js";

const router = Router();

router.get('/',async(req,res)=>{

})

router.post('/',async(req,res)=>{
    const {cartId,productId} = req.body;
    //Olvidemos validaciones, nuestro escenario será ideal.
    await cartsModel.findByIdAndUpdate(cartId,{$push:{products:productId}})
    res.sendStatus(200)
})

export default router;