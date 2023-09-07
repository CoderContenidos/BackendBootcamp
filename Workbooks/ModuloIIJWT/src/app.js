import express from 'express';
import mongoose from 'mongoose';
import jwtRouter from './routes/users.router.js';
import initializeStrategies from './config/passportJWT.config.js';
import cookieParser from 'cookie-parser';

const app = express();

const connection = mongoose.connect("mongodb+srv://CoderUser:123@clustercitofeliz.m6oxtjj.mongodb.net/workBook?retryWrites=true&w=majority")

app.use(cookieParser());

initializeStrategies();

app.use(express.json());

app.use('/api/sessions/',jwtRouter);

app.listen(8080,()=>console.log("Listening"))