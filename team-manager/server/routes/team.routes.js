const { teamController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/players/list', teamController.index)
  .get('/status/game/1', teamController.statusone)
  .get('/status/game/2', teamController.statustwo)
  .get('/status/game/3', teamController.statusthree)
  .post('/players/addplayer', teamController.create)
  .delete('/players/:player_id', teamController.destroy);
