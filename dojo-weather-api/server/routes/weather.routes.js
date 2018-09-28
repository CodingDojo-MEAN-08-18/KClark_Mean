const { weatherController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', weatherController.sanjose)
  .get('/seattle', weatherController.seattle)
  .get('/sanjose', weatherController.sanjose)
  .get('/burbank', weatherController.burbank)
  .get('/dallas', weatherController.dallas)
  .get('/dc', weatherController.dc)
  .get('/chicago', weatherController.chicago)
