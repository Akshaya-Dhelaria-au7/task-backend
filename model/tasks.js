import sequelize from "sequelize";
import db from "../config/db_config.js";

const tasks = db.define(
    "tasks",
    {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: sequelize.STRING },
        description: { type: sequelize.STRING },
        priority: { type: sequelize.STRING },
        status: { type: sequelize.STRING },
        dueDate: { type: sequelize.DATEONLY },
        createdAt: sequelize.DATE,
        updatedAt: sequelize.DATE,
    },
    {
        underscored: true
    }
);
export default tasks;