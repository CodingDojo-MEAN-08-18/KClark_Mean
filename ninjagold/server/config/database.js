const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server/models');
// If project running other than in root, use path.join instead
// const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost:27017/ninjagold', {
  useNewUrlParser: true
});


mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// Mongoose versions < 5 need this:
// mongoose.Promise = global.Promise

// block with sync bc we must read these files before we can continue!
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});