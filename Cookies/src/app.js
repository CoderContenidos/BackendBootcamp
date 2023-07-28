import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.cookie("testCookie",{name:"Mauricio",email:"correo@correo.com"});
})

app.listen(8080,()=>console.log("Listening"));