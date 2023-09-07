import fs from 'fs';
import __dirname from '../../utils.js';

export default class UsersDao {
  constructor() {
    this.path = `${__dirname}/files/users.json`;
    this.init();
  }

  init = async () => {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, JSON.stringify([]));
    }
  };

  getUsers = async () => {
    const data = await fs.promises.readFile(this.path, 'utf-8');
    return JSON.parse(data);
  };

  createUser = async (user) => {
    const users = await this.getUsers();
    if (users.length === 0) {
      user.id = 0;
    } else {
      user.id = users[users.length - 1].id + 1;
    }
    users.push(user);
    await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'));
  };

  getBy =async( userId) =>{
    const users = await this.getUsers();
    console.log(userId);
    return  users.find(user=>user.id==userId);
  }

  updateUser = async (id, user) => {
    const users = await this.getUsers();
    const index = users.findIndex((user) => user.id == id);
    if (index === -1) return null;
    users[index] = user;
    await fs.promises.writeFile(this.path,JSON.stringify(users,null,'\t'))
    return id;
  };
}
