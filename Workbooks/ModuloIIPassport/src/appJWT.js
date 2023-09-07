import express from 'express';
import mongoose from 'mongoose';
import jwtRouter from './routes/jwtUsers.router.js';
import initializeStrategies from './config/passportJWT.config.js';
import cookieParser from 'cookie-parser';

const app = express();

const connection = mongoose.connect("URL DE MONGO")

app.use(cookieParser());

initializeStrategies();

app.use(express.json());

app.use('/api/sessions/',jwtRouter);

app.listen(8080,()=>console.log("Listening"))