const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json()); 

app.use(express.static(path.join(__dirname + '/public/dist/public')));

const db = 'mongodb://localhost/restful_task_api';

require('./server/config/mongoose.js')(db);
require('./server/config/routes.js')(app);

app.listen(4200, function() {
    console.log('Listening on port 4200');
});
