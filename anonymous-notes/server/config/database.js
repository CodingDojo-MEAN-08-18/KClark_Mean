const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server/models');

mongoose.connect(
  'mongodb://localhost:27017/notes',
  {
    useNewUrlParser: true,
  }
);

mongoose.connection.on('connected', () => console.log('connected to mongodb'));

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
