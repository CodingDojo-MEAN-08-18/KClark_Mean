const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json()); 

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/restful_task_api');
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3, maxlength: 64 },
    description: { type: String, required: true, minlength: 3, maxlength: 255 },
    completed: { type: Boolean, required: true }
}, { timestamps: true });

mongoose.model('Task', TaskSchema);

// default for Promises
mongoose.Promise = global.Promise;


const server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});

var route = require('./server/config/routes.js')(app, server);