import BaseRouter from "./BaseRouter.js";
import passport from "passport";
import jwt from 'jsonwebtoken'
import { extractUserFromJWT } from "../middleware/jwtExtractor.js";

export default class SessionsRouter extends BaseRouter{
    init(){

        this.post('/register',passport.authenticate('register',{failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
            res.sendStatus(200);
        })

        this.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/authenticationFail',session:false}),(req,res)=>{
            const tokenUser = {
                name : req.user.name,
                email: req.user.email
            }
            const token = jwt.sign({
                ...tokenUser,
            },'secretJWT',{expiresIn:20});
            console.log(token);
            res.cookie('authToken',token).sendStatus(200);
        })

        this.get('/authenticationFail',(req,res)=>{
            res.sendStatus(401);
        })

        this.get('/current',extractUserFromJWT,(req,res)=>{
            res.sendStatus(200);
        })
    }
}