import { companiesService, usersService } from "../services/repositories.js";

const createUser = async(req,res)=>{
    const {name,email,role="employee"} = req.body;
    if(role!=="employee"||role!=="admin") return res.sendBadRequest('Rol inválido')
    const user = {
        name,
        email,
        role,
        password:"123"
    }
    const userResult = await usersService.create(user);
    const company = await companiesService.getBy({_id:req.user.company});
    company.users.push(userResult._id);
    await companiesService.update(company._id,{users:company.users});
    res.sendSuccess("empleado creado");
}

export default {
    createUser
}