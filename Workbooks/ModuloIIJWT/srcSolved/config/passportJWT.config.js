import passport from "passport";
import local from 'passport-local';
import userModel from "../models/user.js";

const Strategy = local.Strategy;

const initializeStrategies = () => {
    passport.use('register',new Strategy({passReqToCallback:true,usernameField:'email'},async(req,email,password,done)=>{
        const {name} = req.body;
        const exists = await userModel.findOne({email});
        if(exists) return done(null,false,{message:'User already exists'});
        const user = {
            name,
            email,
            password
        }
        const result = await userModel.create(user);
        return done(null,result);
    }))

    passport.use('login',new Strategy({usernameField:'email'},async(email,password,done)=>{
        const user = await userModel.findOne({email,password});
        if(!user) return done(null,false,{message:'User doesnt exist'});
        done(null,user);
    }))
}

export default initializeStrategies;