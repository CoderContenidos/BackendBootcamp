import { companiesService, tasksService, usersService } from "../services/repositories.js"

const getTasks = async(req,res)=>{
    try{
        switch(req.user.role){
            case "admin":{
                const company = await companiesService.getBy({_id:req.user.company});
                const tasks = [];
                console.log(company);
                for(const user of company.users) {
                    tasks.push(...user.tasks);
                }
                return res.sendSuccessWithPayload({tasks})
            }
            case "employee": {
                const userInfo = await usersService.getBy({_id:req.user.id});
                return res.sendSuccessWIthPayload({tasks:userInfo.tasks})
            }
        }
    }catch(error){
        console.log(error);
        res.sendInternalError('error')
    }
}

const createTask = async(req,res)=>{
    const {title,description,priority,employeeId} =req.body;
    if(!title||!description||!priority||!employeeId) return res.sendBadRequest('Incomplete values');
    const task = {
        title,
        description,
        priority
    }
    const taskResult = await tasksService.create(task);
    const employeeResult = await usersService.getBy({_id:employeeId});
    employeeResult.tasks.push(taskResult);
    await usersService.update(employeeId,{tasks:employeeResult.tasks});
    res.sendSuccess("Task Created");
}

export default {
    createTask,
    getTasks
}