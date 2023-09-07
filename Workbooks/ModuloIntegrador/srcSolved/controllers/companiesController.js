import  {companiesService, usersService} from '../services/repositories.js';

const getCompanies = async(req,res) =>{
    try{
        const companies = await companiesService.get();
        res.sendSuccessWithPayload({companies});
    }catch(error){
        console.log(error);
        res.sendInternalError()
    }
}

const createCompany = async(req,res) =>{
    const {name,type,address,adminName,adminEmail} = req.body;
    if(!name||!type||!address||!adminName||!adminEmail) return res.sendBadRequest('Incomplete Values');
    const company = {
        name,
        type,
        address
    }
    const companyResult = await companiesService.create(company);
    const basePassword = "123" //Agregar Hash a tu gusto
    const user = {
        name: adminName,
        email:adminEmail,
        password:basePassword,
        role:"admin"
    };
    const userResult = await usersService.create(user);
    companyResult.users.push(userResult._id);
    await companiesService.update(companyResult._id,{users:companyResult.users});
    res.sendSuccessWithPayload({company:companyResult._id});
}

export default {
    getCompanies,
    createCompany
}