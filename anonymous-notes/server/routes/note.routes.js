const { noteController } = require('../controllers');
const router = require('express').Router();

module.exports = router
.get('/', noteController.index)
.post('/', noteController.create)
.get('/:note_id', noteController.show);