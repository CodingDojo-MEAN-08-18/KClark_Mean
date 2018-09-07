const mongoose = require('mongoose');
const Quote = mongoose.model('Quotes');

module.exports = function(app) {
    // GET ' / ' for the index
    app.get('/', function(req, res) {
        res.render('index');
    });

    // GET '/quotes' for the screen where all the quotes are rendered
    app.get('/quotes', function(req, res) {
        Quote
        .find()
        .sort({ createdAt : -1 })
        .exec(function(err, quotes) {
            if(err) {
                console.log(err);
            } else {
                res.render('quotes', { quotes: quotes });
            }
        });
    });

    // POST '/quotes' for the method of the form to make a new quote 
    app.post('/quotes', function(req, res) {
        const quote = new Quote({ name: req.body.name, quote: req.body.quote});
        quote.save(function(err){
            if(err) {
                console.log(err);
            } else {
                console.log("Added quote");
                res.redirect('/quotes');
            }
        });
    });
}