const taskRouter = require('./task.routes');
const router = require('express').Router();

module.exports = router.use('/tasks', taskRouter);