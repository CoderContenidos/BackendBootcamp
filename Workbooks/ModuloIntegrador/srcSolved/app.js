import express from 'express';
import mongoose from 'mongoose';
import initializeStrategies from './config/passportJWT.config.js';
import cookieParser from 'cookie-parser';
import SessionsRouter from './routes/SessionsRouter.js';
import CompaniesRouter from './routes/CompaniesRouter.js';
import UsersRouter from './routes/UsersRouter.js';
import TasksRouter from './routes/TasksRouter.js';
import config from './config/config.js';

const app = express();

const connection = mongoose.connect(config.mongo.URL);

app.use(cookieParser());

initializeStrategies();

app.use(express.json());

const sessionsRouter = new SessionsRouter();
const companiesRouter = new CompaniesRouter();
const usersRouter = new UsersRouter();
const tasksRouter = new TasksRouter();

app.use('/api/sessions/',sessionsRouter.getRouter());
app.use('/api/companies/',companiesRouter.getRouter());
app.use('/api/users/',usersRouter.getRouter());
app.use('/api/tasks/',tasksRouter.getRouter());

app.listen(8080,()=>console.log("Listening"))