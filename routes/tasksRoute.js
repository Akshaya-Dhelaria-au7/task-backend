import express from 'express';
import { createTask, deleteTasks, filterTasks, findAllTask, searchTasks, updateTasks } from '../controllers/task.js'
import auth from '../middleware/index.js';

const router = express.Router();

// CRUD of tasks
router.post('/create', auth, createTask);
router.get('/getTaskList', auth, findAllTask);
router.put('/editTaskList', auth, updateTasks);
router.delete('/deleteTaskList/:id', auth, deleteTasks);

//Filterig of taks
router.post('/getFilteredTask', auth, filterTasks);

//Searching of tasks
router.post('/searchTask', auth, searchTasks);

export default router;