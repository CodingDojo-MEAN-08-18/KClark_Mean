const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Change the way we call bodyParser
// old way:
// app.use(bodyParser.urlencoded({ extended: false }));
// new way:
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

// Example using the Quoting Dojo assignment code:
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
           console.log("Returned error", err);
            // NEW = respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // NEW= respond with JSON
           res.json({message: "Success", data: quotes})
        }
     })
})    

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
