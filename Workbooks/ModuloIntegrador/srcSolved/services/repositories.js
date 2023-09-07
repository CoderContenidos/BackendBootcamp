import CompaniesDao from "../dao/CompaniesDao.js";
import UsersDao from "../dao/UsersDao.js";
import TasksDao from "../dao/TasksDao.js";

import UserRepository from "./repositories/UserRepository.js";
import CompanyRepository from "./repositories/CompanyRepository.js";
import TaskRepository from "./repositories/TaskRepository.js";

export const usersService = new UserRepository(new UsersDao());
export const companiesService = new CompanyRepository(new CompaniesDao());
export const tasksService = new TaskRepository(new TasksDao());