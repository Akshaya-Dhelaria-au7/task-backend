import { create, findAllComments } from "../service/commentService.js"

export const createComment = async (req, res) => {
    const createdComment = await create(req.body.data,req.userId);
    res.send(createdComment)
}

export const findAllComment = async (req, res) => {
    const { taskId } = req.params
    const comments = await findAllComments(+taskId);
    res.send(comments)
}