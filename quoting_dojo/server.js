const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

const path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/quotes');
const QuotesSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: { type: String, required: true, min: 1, max: 255 }
}, { timestamps: true });
mongoose.model('Quotes', QuotesSchema);
const Quote = mongoose.model('Quotes');

// TODO: I am not happy making everything plural but it's
// confusing having 'quote' and 'quotes'
// Fix this once it gets working!

// default for Promises
mongoose.Promise = global.Promise;

// GET ' / ' for the index
app.get('/', function(req, res) {
    res.render('index');
});

// GET '/quotes' for the screen where all the quotes are rendered
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes){
        // if(err) {
        //     let messages = [];
        //     console.log("Something went wrong", err);
        //     messages.push(err); 
        //     res.render('index', { messages: messages });
        // } else {
            res.render('quotes', { quotes: quotes });
        // }
    });
});

// POST '/quotes' for the method of the form to make a new quote 
app.post('/quotes', function(req, res) {
    console.log("post data: ", req.body);
    const quote = new Quote({ name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err) {
            let messages = [];
            console.log("Something went wrong", err);
            messages.push(err); 
            res.render('index', { messages: messages });
        } else {
            console.log("Added quotes");
            res.render('quotes', { quotes: quotes });
            // res.render('quotes');
        }
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
