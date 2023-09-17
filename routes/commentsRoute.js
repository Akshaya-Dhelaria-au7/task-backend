import express from 'express';
import { createComment, findAllComment } from '../controllers/comments.js'
import auth from '../middleware/index.js';

const router = express.Router();

//Create comment
router.post('/create', auth, createComment);

//Find all comments based on taskId
router.get('/getComments/:taskId', auth, findAllComment);

export default router;