
export default class TaskRepository {
    constructor(dao){
        this.dao = dao;
    }

    get = (params) =>{
        return this.dao.getTaskss(params);
    }

    getBy = (params) =>{
        return this.dao.getTaskBy(params);
    }

    create = (task) => {
        return this.dao.createTask(task);
    }

    update = (id,task) =>{
        return this.dao.updateTask(id,task);
    }

    delete = (id) =>{
        return this.dao.deleteTask(id);
    }
}