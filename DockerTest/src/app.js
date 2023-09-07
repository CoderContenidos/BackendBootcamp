import express from 'express';
import cluster from 'cluster';
import os from 'os';

const cpus = os.cpus().length;

if(cluster.isPrimary){
    console.log("Primario");
    for(let i=0;i<cpus;i++){
        cluster.fork();
    }
    cluster.on('exit',worker=>{
        console.log("Proceso hijo muerto, generando reemplazo");
        cluster.fork();
    })
}else{
    const app = express();


    app.get('/simple',(req,res)=>{
        let sum=0;
        for(let i=0;i<100000;i++){
            sum+=i;
        }
        res.send({sum})
    })
    
    app.get('/complex',(req,res)=>{
        let sum=0;
        for(let i=0;i<5e8;i++){
            sum+=i;
        }
        res.send({process:process.pid,sum})
    })
    
    app.listen(8080,()=>console.log("Listening"));
}
