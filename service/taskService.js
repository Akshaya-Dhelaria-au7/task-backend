import { Op } from 'sequelize';
import db from '../model/index.js'

const Tasks = db.tasks;

export const create = async (data) => {
    const { name, description, status, dueDate, priority } = data || {}
    if (!(name || description || status)) {
        return { status: 400, message: "Please enter complete details to create the task" }
    }

    try {
        const task = {
            name,
            description,
            status,
            dueDate,
            priority
        };

        const res = await Tasks.create(task);
        if (res) return { message: 'Task Created Successfully', status: 200 }
        return {
            message: `Can't create task`,
            status: 403
        }
    } catch (error) {
        return { message: "Error occurred while creating the task.", error }
    }
};

export const findAllTasks = async () => {
    const tasks = await Tasks.findAll();
    return tasks;

};

export const updateTask = async ({ data }) => {
    try {
        const { id } = data || {}
        const updatedTask = await Tasks.update(data, {
            where: { id }
        })

        if (updatedTask[0] === 1) {
            return {
                status: 200,
                message: "Successfully Updated Task."
            }
        }
        return {
            message: `Can't update task with id=${id}`,
            status: 403
        }
    } catch (error) {
        return {
            message: `Error occurred while updating the task with id=${id}`,
            error
        }
    }
};

export const deleteTask = async ({ id }) => {

    try {
        const deletedTaskFromDB = await Tasks.destroy({
            where: { id: +id }
        })

        if (deletedTaskFromDB === 1) {
            return {
                status: 200,
                message: "Successfully Deleted Task."
            }
        }
        return {
            status: 403,
            message: `Something went wrong! Can't delete Task with id=${id}.`
        }
    } catch (error) {
        return {
            message: `Error occurred while deleting the task with id=${id}`,
            error
        }
    }
};

export const filterTask = async (data) => {
    try {
        const res = await Tasks.findAll({
            where: {
                ...data
            }
        });

        if (res) return { message: 'Task Filtered Successfully', status: 200, data: res };
        return {
            message: `Can't filter task`,
            status: 403
        };
    } catch (error) {
        return { message: "Error occurred while filtering the task.", error }
    }
};

export const searchTask = async (data) => {
    try {
        const { name, description } = data || {};
        const res = await Tasks.findAll({
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${description}%`
                        }
                    }
                ]
            }
        });

        if (res) return { message: 'Task Searched Successfully', status: 200, data: res };
        return {
            message: `Can't search task`,
            status: 403
        };
    } catch (error) {
        return { message: "Error occurred while searching the task.", error }
    }
};