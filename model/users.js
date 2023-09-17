import sequelize from "sequelize";
import db from "../config/db_config.js";

const users = db.define(
    "users",
    {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: sequelize.STRING },
        email: { type: sequelize.STRING },
        createdAt: sequelize.DATE,
        updatedAt: sequelize.DATE,
    },
    {
        underscored: true
    }
);

export default users;