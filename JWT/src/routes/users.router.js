import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'
import { extractUserFromJWT } from "../middleware/jwtExtractor.js";

const router = Router();


router.post('/register',passport.authenticate('register',{failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
    res.sendStatus(200);
})

router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
    const tokenUser = {
        name : req.user.name,
        email: req.user.email
    }
    const token = jwt.sign({
        ...tokenUser,
        aud:'papa'
    },'secretJWT');
    console.log(token);
    res.cookie('authToken',token).sendStatus(200);
})

router.get('/authenticationFail',(req,res)=>{
    
    res.sendStatus(401);
})


router.get('/current',extractUserFromJWT,(req,res)=>{
    res.sendStatus(200);
})

export default router;