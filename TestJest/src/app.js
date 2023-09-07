import express from 'express';

const app = express();

const PORT = process.env.PORT||8080;

app.use(express.json());

const users = [];

app.post('/api/users',(req,res)=>{
    const {firstName,lastName,email,password} = req.body;
    if(!firstName||!lastName||!email||!password) return res.status(400).send({error:"Incomplete values"});
    const user = {
        name:`${firstName} ${lastName}`,
        email,
        password
    }
    if(users.length===0){
        user.id=1
    }else{
        user.id = users[users.length-1].id+1;
    }
    users.push(user);
    console.log(user);
    res.send({user});
})

app.get('/api/users',(req,res)=>{
    res.send({users})
})

app.get('/api/users/:uid',(req,res)=>{
    const {uid} = req.params;
    if(isNaN(uid)) return res.status(400).send({error:"Invalid param"});
    const user = users.find(user=>user.id===parseInt(uid))
    if(!user) return res.status(404).send({error:"User not found"});
    res.send({user})
})

app.listen(8080,()=>console.log("Listening"))