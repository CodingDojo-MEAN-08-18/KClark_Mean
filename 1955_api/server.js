const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.json()); 

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/1955_api');
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
}, { timestamps: true });

mongoose.model('Person', PersonSchema);

// default for Promises
mongoose.Promise = global.Promise;


const server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});

var route = require('./routes/routes.js')(app, server);
