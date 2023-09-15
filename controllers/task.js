import { create, findAllTasks, deleteTask, updateTask, filterTask, searchTask } from "../service/taskService.js"

export const createTask = async (req, res) => {
  const taskCreation = await create(req.body.data);
  res.send(taskCreation)
}

export const findAllTask = async (req, res) => {
  const tasks = await findAllTasks();
  res.send(tasks)
}

export const updateTasks = async (req, res) => {
  const updatedTask = await updateTask(req.body);
  res.send(updatedTask)
}

export const deleteTasks = async (req, res) => {
  const deletedTask = await deleteTask(req.params);
  res.send(deletedTask)
}

export const filterTasks = async (req, res) => {
  const filteredTask = await filterTask(req.body.data);
  res.send(filteredTask)
}

export const searchTasks = async (req, res) => {
  const searchedTask = await searchTask(req.body.data);
  res.send(searchedTask)
}