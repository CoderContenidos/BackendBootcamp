import passport from "passport";
import local from 'passport-local';
import { usersService } from "../services/repositories.js";
import config from "./config.js";

const Strategy = local.Strategy;

const initializeStrategies = () => {
    passport.use('register',new Strategy({passReqToCallback:true,usernameField:'email'},async(req,email,password,done)=>{
        const {name} = req.body;
        const exists = await usersService.getBy({email});
        if(exists) return done(null,false,{message:'User already exists'});
        const user = {
            name,
            email,
            password
        }
        const result = await usersService.create(user);
        return done(null,result);
    }))

    passport.use('login',new Strategy({usernameField:'email'},async(email,password,done)=>{
        if(email === config.app.SUPERADMIN_EMAIL && password === config.app.SUPERADMIN_PASSWORD){
            return done(null, {
                name:"Admin",
                _id:0,
                role:'superadmin'
            })
        }
        const user = await usersService.getBy({email,password});
        if(!user) return done(null,false,{message:'User doesnt exist'});
        done(null,user);
    }))
}

export default initializeStrategies;