const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// cat DB set up
mongoose.connect('mongodb://localhost/cat_dashboard');
const CatSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    age: { type: Number, required: true, min: 1, max: 30 },
    color: { type: String, required: true, minlength: 2 },
    fave_food: { type: String, required: true, minlength: 2 }
}, { timestamps: true });

mongoose.model('Cats', CatSchema);
const Cat = mongoose.model('Cats');

// default for Promises
mongoose.Promise = global.Promise;


// GET '/' Displays all of the cats.
app.get('/', function(req, res) {
    Cat.find({}, function(err, cat_list) {
        if(err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.render('index', { cats: cat_list });
        }
    });
});


// GET '/cats/:id' Displays information about one cat.
app.get('/cats/:id', function(req, res) {
    Cat.find({ _id: req.params.id }, function(err, cat_record) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else {
            console.log("found cat with id", req.params.id);
            console.log(cat_record);
            res.render('detail', { cat: cat_record });
        }
    });
});


// GET '/cats/new' Displays a form for making a new cat.
app.get('/new', function(req, res) {
    res.render('new');
})


// POST '/cats' Should be the action attribute for the form 'GET '/cats/new'
app.post('/cats', function(req, res) {
    const new_cat = new Cat({name: req.body.name, age: req.body.age, color: req.body.color, fave_food: req.body.fave_food })

    new_cat.save(function(err) {
        if(err) {
            console.log(err);
            res.redirect('/');
        } else { 
            console.log("Cat created");
            res.redirect('/');
        }
    });
});


// GET '/cats/edit/:id' Should show a form to edit an existing cat.
app.get('/edit/:id', function(req, res) {
    Cat.findOne({ _id: req.params.id }).lean().exec(function(err, cat_record) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else {
            console.log("found cat with id", req.params.id);
            res.render('edit', { cat: cat_record });
        }
    });
});


// POST '/cats/:id' Should be the action attribute for the form 'GET '/cats/edit/:id'
app.post('/cats/:id', function(req, res) {
    Cat.updateOne({ _id: req.params.id }, {name: req.body.name, age: req.body.age, color: req.body.color, fave_food: req.body.fave_food }, function(err, result) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else { 
            console.log("Cat updated");
            // Assume user wants to see cat details
            res.redirect('/');
        }
    });
});


// POST '/cats/destroy/:id' Should delete the cat from the database by ID.
app.post('/destroy/:id', function(req, res) {
    Cat.deleteOne({ _id: req.params.id }, function(err, result) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else { 
            console.log("Cat deleted");
            res.redirect('/');
        }
    });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});