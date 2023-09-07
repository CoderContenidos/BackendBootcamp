import BaseRouter from "./BaseRouter.js";
import passport from "passport";
import { extractUserFromJWT } from "../middleware/jwtExtractor.js";
import sessionsController from "../controllers/sessions.controller.js";

export default class SessionsRouter extends BaseRouter{
    init(){

        this.post('/register',['NO_AUTH'],passport.authenticate('register',{failureRedirect:'/api/sessions/authenticationFail',session:false}),sessionsController.register)

        this.post('/login',['NO_AUTH'],passport.authenticate('login',{failureRedirect:'/api/sessions/authenticationFail',session:false}),sessionsController.login);

        this.get('/authenticationFail',['NO_AUTH'],sessionsController.authFail)

        this.get('/current',['AUTHENTICATED'],extractUserFromJWT,sessionsController.current)
    }
}