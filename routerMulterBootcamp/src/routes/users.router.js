import { Router } from "express";
import UsersDao from "../dao/FileSystem/Users.js";
import uploader from "../services/UploadService.js";
import __dirname from "../utils.js";
import fs from 'fs';

const router = Router();
const usersService = new UsersDao();

router.post('/',uploader.fields([
    {name:'contract',maxCount:1},
    {name:'dni',maxCount:1}
]), async(req,res)=>{
    const user = req.body;
    const files = req.files;
    if(files.contract){
        user.contract = files.contract[0].filename;
    }
    if(files.dni){
        user.dni = files.dni[0].filename;
    }
    user.contractHistory = [];
    user.dniHistory = [];
    await usersService.createUser(user);
    res.sendStatus(200);
})

router.put('/',uploader.fields([
    {name:'contract',maxCount:1},
    {name:'dni',maxCount:1}
]), async(req,res)=>{
    const userId = req.query.id;
    const user = req.body;
    const files = req.files;
    const currentUser = await usersService.getBy(+userId)
    console.log(currentUser);
    if(files.contract){
        user.contract = files.contract[0].filename;
        if(currentUser.contract){
            //Eliminar el archivo superpuesto
            // await fs.promises.unlink(`${__dirname}/docs/contracts/${currentUser.contract}`)

            //Guardar en historial
            currentUser.contractHistory.push(currentUser.contract)
        }
    }
    if(files.dni){
        user.dni = files.dni[0].filename;
        if(currentUser.dni){
            //Eliminar el archivo superpuesto
            // await fs.promises.unlink(`${__dirname}/docs/dnis/${currentUser.dni}`)

            //Guardar en historial
            currentUser.dniHistory.push(currentUser.dni);
        }
    }
    const resultUser = {...currentUser,...user}
    await usersService.updateUser(+userId,resultUser);
    res.sendStatus(200);
})

export default router;