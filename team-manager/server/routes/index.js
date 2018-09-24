const teamRouter = require('./team.routes');
const router = require('express').Router();

module.exports = router.use('/teams', teamRouter);
