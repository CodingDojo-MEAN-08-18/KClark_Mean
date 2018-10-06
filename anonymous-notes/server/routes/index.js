const noteRouter = require('./note.routes');
const router = require('express').Router();

module.exports = router.use('/notes', noteRouter);
