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
app.use(session({cookie: { maxAge: 60000 }, secret: 'secret'}));
app.use(flash());

// basic_mongoose DB set up
mongoose.connect('mongodb://localhost/basic_mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    age: { type: Number, required: true, min: 1, max: 150 }
})
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

// default for Promises
mongoose.Promise = global.Promise;

// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users){
        res.render('index', { users: users });
    });
});

// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    const user = new User({ name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err) {
            console.log("Something went wrong", err);
            for(const key in err.errors) {
                req.flash('errs', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            console.log("Successfully added user!");
            res.redirect('/');
        }
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
