import tasksController from "../controllers/tasks.controller.js";
import BaseRouter from "./BaseRouter.js";

export default class TasksRouter extends BaseRouter {
    init(){
        this.get('/',['ADMIN','EMPLOYEE'],tasksController.getTasks);
        this.post('/',['ADMIN'],tasksController.createTask);
    }
}