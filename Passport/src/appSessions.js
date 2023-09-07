import express from 'express';
import mongoose from 'mongoose';
import sessionsRouter from './routes/sessionUsers.router.js';
import initializeStrategies from './config/passportSession.config.js';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

const connection = mongoose.connect("URL DE MONGO")

app.use(session({
    store:MongoStore.create({
        mongoUrl:"URL DE MONGO",
        ttl:36000
    }),
    resave:false,
    saveUninitialized:false,
    secret:'a2341cazs'
}))

initializeStrategies();
app.use(passport.initialize());
app.use(passport.session());



app.use(express.json());

app.use('/api/sessions/',sessionsRouter);

app.listen(8080,()=>console.log("Listening"))