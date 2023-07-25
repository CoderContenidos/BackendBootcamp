import { Router } from "express";
import usersModel from "../models/users.js";
import cartsModel from "../models/carts.js";


const router = Router();

router.get('/',async(req,res)=>{
    const users = await usersModel.find();
    res.send({payload:users})
})

router.post('/',async(req,res)=>{
    const {name,email} = req.body;
    const cart = await cartsModel.create({products:[]})
    const user = {
        name,
        email,
        cart: cart.id
    }
    const result = await usersModel.create(user);
    res.send({payload:result})
})

export default router;