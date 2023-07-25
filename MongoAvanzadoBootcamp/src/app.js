import express from 'express';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

const connection = mongoose.connect("mongodb+srv://CoderUser:123@clustercitofeliz.m6oxtjj.mongodb.net/BootcampEcommerce?retryWrites=true&w=majority")

app.use('/api/users',usersRouter);
app.use('/api/carts',cartsRouter);
app.use('/api/products',productsRouter);


app.listen(8080,()=>console.log("Listening"))