const authorRouter = require('./author.routes');
const router = require('express').Router();

module.exports = router.use('/', authorRouter);