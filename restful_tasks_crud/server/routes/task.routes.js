const { taskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', taskController.index)
  .post('/', taskController.create)
  .get('/:taskId', taskController.show)
  .put('/:taskId', taskController.update)
  .delete('/:taskId', taskController.destroy);
