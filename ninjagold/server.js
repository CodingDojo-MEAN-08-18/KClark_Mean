const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 8000;
const app = express();

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(express.static(path.join(__dirname, 'dist/ninjagold')))
  .listen(port, () => console.log(`Express server listening on port ${ port }`));

  




