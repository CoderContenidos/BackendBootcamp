import { Router } from "express";
import passport from "passport";

const router = Router();


router.post('/register',passport.authenticate('register',{failureMessage:true,failureRedirect:'/api/sessions/authenticationFail'}),(req,res)=>{
    res.sendStatus(200);
})

router.post('/login',passport.authenticate('login',{failureMessage:true,failureRedirect:'/api/sessions/authenticationFail'}),(req,res)=>{
    req.session.user = {
        name: req.user.name,
        email: req. user.email
    }
    res.sendStatus(200);
})

router.get('/authenticationFail',(req,res)=>{
    console.log(req.session.messages);
    res.sendStatus(401);
})


router.get('/current',(req,res)=>{
    console.log(req.user);
    res.sendStatus(200);
})

export default router;