import db from '../model/index.js'
import users from '../model/users.js';

const Comments = db.comments;

export const create = async (data, userId) => {
    const { comment, taskId } = data || {}
    if (!(comment || taskId)) {
        return { status: 400, message: "Please provide complete details" }
    }

    try {
        const comments = {
            comment, taskId, userId
        };

        const res = await Comments.create(comments);
        if (res) return { message: 'Added Comment Successfully', status: 200 }
        return {
            message: `Can't create comment`,
            status: 403
        }
    } catch (error) {
        return { message: "Error occurred while commenting on task.", error }
    }
};

export const findAllComments = async (taskId) => {
    const comments = await Comments.findAll({
        where: {
            taskId
        },
        include: [{
            model: users,
        }]
    });
    return comments;

};