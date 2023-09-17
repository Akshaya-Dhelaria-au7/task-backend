import sequelize from "sequelize";
import db from "../config/db_config.js";
import tasks from "./tasks.js";
import users from "./users.js";

const comments = db.define(
    "comments",
    {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        comment: { type: sequelize.STRING },
        taskId: { type: sequelize.INTEGER },
        userId: { type: sequelize.INTEGER },
        createdAt: sequelize.DATE,
        updatedAt: sequelize.DATE,
    },
    {
        underscored: true
    }
);

comments.belongsTo(tasks, {
    foreignKey: 'taskId',
});


comments.belongsTo(users, {
    foreignKey: 'userId',
});

export default comments;