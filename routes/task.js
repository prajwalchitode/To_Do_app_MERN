

import express from 'express';
import { allTask, deleteTask, newTask, updateTask } from '../controllers/task.js';
// import isAuthenticated from '../middleware/auth.js'
import { isAuthenticated } from "../middleware/auth.js";


const router = express.Router();

// CREATING NEW POST REQUEST

router.post('/new',isAuthenticated,newTask)

//  get all tasks
router.get('/my',isAuthenticated,allTask);

router.route('/:id')
.put( isAuthenticated,updateTask)
.delete(isAuthenticated,deleteTask);


export default router;