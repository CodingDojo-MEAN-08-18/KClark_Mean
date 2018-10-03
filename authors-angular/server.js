const express = require('express');
const path = require('path');
const logger = require('morgan');
const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));