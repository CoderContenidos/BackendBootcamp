import usersController from "../controllers/users.controller.js";
import BaseRouter from "./BaseRouter.js";

export default class UsersRouter extends BaseRouter {
    init(){
        this.post('/',['ADMIN'],usersController.createUser);
    }
}