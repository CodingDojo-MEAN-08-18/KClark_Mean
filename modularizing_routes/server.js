const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/quotes');
const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: { type: String, required: true, min: 1, max: 255 }
}, { timestamps: true });

mongoose.model('Quotes', QuoteSchema);

// default for Promises
mongoose.Promise = global.Promise;

// include the routes we exported from routes.js
require('./server/config/routes.js')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
