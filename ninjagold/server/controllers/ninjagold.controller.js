const NinjaGold = require('mongoose').model('NinjaGold');

module.exports = {
  index(request, response) {
    NinjaGold.find()
   },
  create(request, response) { },
  show(request, response) { },
};