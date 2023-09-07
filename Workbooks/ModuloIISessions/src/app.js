import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();
//Colocar dentro del objeto session si deseas ver el funcionamiento en Mongo
// store:MongoStore.create({
//     mongoUrl:"tu URL de Mongo Aquí",
//     ttl:10
// }),
app.use(session({
   //store: descomentar éste si se desea agregar File o MongoStore
    resave:true,
    saveUninitialized:false,
    secret:"sasd",
    rolling:false,
    cookie:{
        maxAge:10000   
    }
}));

app.get('/sinInteraccion',(req,res)=>{
    res.sendStatus(200);
})

app.get('/conInteraccion',(req,res)=>{
    req.session.papa = "Papa con queso"
    res.sendStatus(200);
})

app.get('/info',(req,res)=>{
    console.log(req.session.papa);
    res.sendStatus(200);
})

app.listen(8080,()=>console.log("Listening"))