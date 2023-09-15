import Sequelize from "sequelize";
import sequelizeInstance  from '../config/db_config.js'
import tasks from "./tasks.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeInstance;

db.tasks = tasks;

export default db;