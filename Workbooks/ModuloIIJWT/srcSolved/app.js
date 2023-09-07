import express from 'express';
import mongoose from 'mongoose';
import initializeStrategies from './config/passportJWT.config.js';
import cookieParser from 'cookie-parser';
import SessionsRouter from './routes/SessionsRouter.js';

const app = express();

const connection = mongoose.connect("mongodb+srv://CoderUser:123@clustercitofeliz.m6oxtjj.mongodb.net/workBook?retryWrites=true&w=majority")

app.use(cookieParser());

initializeStrategies();

app.use(express.json());

const sessionsRouter = new SessionsRouter();

app.use('/api/sessions/',sessionsRouter.getRouter());

app.listen(8080,()=>console.log("Listening"))