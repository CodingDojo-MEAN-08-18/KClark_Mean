var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

// default for Promises
mongoose.Promise = global.Promise;

// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users){
        if(err) {
            console.log("Unable to find documents in Users");
        } else {
            res.render('index', { users: users });
        }
    })
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User({ name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err) {
            console.log("something went wrong");
        } else {
            console.log("Successfully added user!");
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
