const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json()); 

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/restful_task_api');
// default for Promises
mongoose.Promise = global.Promise;

require('./server/models/task.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log('Listening on port 8000');
});