import companyModel from "./models/company.js";

export default class CompaniesDao {
    getCompanies = (params) =>{
        return companyModel.find(params).populate('users');
    }

    getCompanyBy = (params) =>{
        return companyModel.findOne(params).populate('users');
    }

    createCompany = (company) =>{
        return companyModel.create(company);
    }

    updateCompany = (id,company) =>{
        return companyModel.updateOne({_id:id},{$set:company});
    }

    deleteCompany = (id) =>{
        return companyModel.deleteOne({_id:id});
    }
    
}