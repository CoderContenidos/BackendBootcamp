import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'

const router = Router();


router.post('/register',passport.authenticate('register',{failureMessage:true,failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
    res.sendStatus(200);
})

router.post('/login',passport.authenticate('login',{failureMessage:true,failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
    const tokenUser = {
        name : req.user.name,
        email: req.user.email
    }
    const token = jwt.sign(tokenUser,'secretJWT');
    res.cookie('authToken',token).sendStatus(200);
})

router.get('/authenticationFail',(req,res)=>{
    
    res.sendStatus(401);
})


router.get('/current',(req,res)=>{
    //Se optó por dejar este código vacío para que resuelvas en el workbook del módulo II
})

export default router;