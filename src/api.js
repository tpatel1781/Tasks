const express = require('express');
const tasks = require('./modules/tasks');

var router = express.Router();

router.post('/task', tasks.createTask)
router.get('/tasks', tasks.getAllTasks);
router.patch('/task', tasks.updateTask);

module.exports = router;