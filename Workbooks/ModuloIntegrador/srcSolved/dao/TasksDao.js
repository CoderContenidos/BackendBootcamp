import taskModel from "./models/task.js";


export default class TasksDao {

    getTasks = (params) =>{
        return taskModel.find(params);
    }

    getTaskBy = (params) =>{
        return taskModel.findOne(params);
    }

    createTask = (task) =>{
        return taskModel.create(task);
    }

    updateTask = (id,task) =>{
        return taskModel.updateOne({_id:id},{$set:task});
    }

    deleteTask = (id) =>{
        return taskModel.deleteOne({_id:id});
    }
    
}