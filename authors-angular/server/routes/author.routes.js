const { authorController } = require('./controllers');
const router = require('express').Router();

module.exports = router
.get('/', authorController.index)
.get('/new', authorController.new)
.post('/', authorController.create)
.get('/:author_id', authorController.show)
.put('/:author_id', authorController.update)
.delete('/:author_id', authorController.destroy);