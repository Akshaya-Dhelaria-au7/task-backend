import Sequelize from "sequelize";
import sequelizeInstance from '../config/db_config.js'
import tasks from "./tasks.js";
import comments from './comments.js'
import users from './users.js'

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeInstance;

db.tasks = tasks;
db.comments = comments;
db.users = users;

export default db;