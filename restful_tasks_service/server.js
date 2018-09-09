const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json()); 

const db = 'mongodb://localhost/restful_task_api';

require('./server/config/mongoose.js')(db);
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log('Listening on port 8000');
});