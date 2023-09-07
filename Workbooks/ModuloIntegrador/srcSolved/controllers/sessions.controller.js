import config from "../config/config.js";
import { companiesService } from "../services/repositories.js";
import jwt from 'jsonwebtoken';

const register = (req,res)=>{
    res.sendStatus(200);
}

const login = async(req,res)=>{
    const company = await companiesService.getBy({users:{$in:[req.user._id]}})
    try{
    const tokenUser = {
        name : req.user.name,
        role: req.user.role,
        id:req.user._id,
        company: company._id
    }
    console.log(tokenUser);
    const token = jwt.sign({
        ...tokenUser,
    },config.jwt.SECRET);
    console.log(token);
    res.cookie(config.jwt.COOKIE,token).sendStatus(200);
    }catch(error){
        console.log(error);
    }
}

const current = (req,res)=>{
    res.sendStatus(200);
}

const authFail = (req,res)=>{
    res.sendStatus(401);
}


export default {
    authFail,
    current,
    login,
    register
}