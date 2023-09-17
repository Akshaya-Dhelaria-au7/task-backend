import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host     : "localhost",
    username : "root",
    password : "password",
    database : "task_management",
    dialect: 'mysql',
    logging: false,
    sync: true,
    pool: {
        max     : 1,
        min     : 1,
        acquire : 30000,
        idle    : 10000,
    }
});

export default sequelize;