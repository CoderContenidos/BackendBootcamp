import companiesController from "../controllers/companiesController.js";
import BaseRouter from "./BaseRouter.js";

export default class CompaniesRouter extends BaseRouter{
    init(){
        this.get('/',['SUPERADMIN'],companiesController.getCompanies);
        this.post('/',['SUPERADMIN'], companiesController.createCompany);
    }
}