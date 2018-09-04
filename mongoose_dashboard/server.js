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
    cat_id: { type: Number },
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
            console.log(err)
        } else {
            res.render('index', { cats: cat_list });
        }
    });
});

// GET '/cats/:id' Displays information about one cat.
app.get('/cats/:id', function(req, res) {
    Cat.find({ cat_id: req.params.id }, function(err, cat_record) {
        if(err) {
            console.log(err)
        } else {
            console.log("found cat with id", req.params.id);
            res.render('index', { cats: cat_record });
        }
    });
});

// GET '/cats/new' Displays a form for making a new cat.
app.get('/new', function(req, res) {
    res.render('new');
})

// POST '/cats' Should be the action attribute for the form 'GET '/cats/new'
app.post('/cats', function(req, res) {
    // TODO: Change how max id value is acquired
    // bc this won't work in the real world.
    // Get current max id so we can insert a new row
    Cat
    .find()
    .sort({ cat_id: -1 })
    .limit(1)
    .exec(function(err, result) {
        console.log("RESULT ======", result);
        if(err) {
            console.log(err);
        } else { 
            let new_id = result.cat_id + 1;  
            console.log("new_id is", typeof(new_id), "and result.cat_id is", typeof(result.cat_id));  
            const new_cat = new Cat({ cat_id: new_id
                , name: req.body.name
                , age: req.body.age
                , color: req.body.color
                , fave_food: req.body.fave_food });
            
            new_cat.save(function(err) {
                if(err) {
                    console.log(err);
                } else { 
                    console.log("Cat", cat_id, "created");
                    // Assume user wants to see cat details
                    res.redirect('/' + cat_id);
                }
        });
    }});
});

// GET '/cats/edit/:id' Should show a form to edit an existing cat.
app.get('/edit/:id', function(req, res) {
    Cat.find({ cat_id: req.params.id }, function(err, cat_record) {
        if(err) {
            console.log(err)
        } else {
            console.log("found cat with id", req.params.id);
            res.render('index', { cat: cat_record });
        }
    });
});

// POST '/cats/:id' Should be the action attribute for the form 'GET '/cats/edit/:id'
app.post('/cats/:id', function(req, res) {
    const query = { cat_id : req.params.id };
    Cat.findOneAndUpdate(query, {name: req.body.name, age: req.body.age, color: req.body.color, fave_food: req.body.fave_food });}
        function(err) {
        if(err) {
            console.log(err);
        } else { 
            console.log("Cat", cat_id, "updated");
            // Assume user wants to see cat details
            res.redirect('/' + cat_id);
        }
    });
});





// POST '/cats/destroy/:id' Should delete the cat from the database by ID.

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});