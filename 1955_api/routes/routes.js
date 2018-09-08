const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = function Route(app, server) {


    // GET '/' will serve up the full collection of people born in 1955
    app.get('/', function(req, res) {
        Person.find({}, function(err, people_list) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                res.json(people_list);
            };
        });
    });


    // GET '/new/:name/' will add a name into the database which can be used for blank spaces
    app.get('/new/:name', function(req, res) {
        const new_person = new Person({ name: req.params.name })

        new_person.save(function(err) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log('New name: ', req.params.name);
                res.redirect('/');
            };
        });
    });


    // GET '/remove/:name/' will delete a name from the database
    app.get('/remove/:name', function(req, res) {
        Person.deleteOne({name: req.params.name}, function(err, result) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log('Removed name: ' + req.params.name)
                res.redirect('/');
            };
        });
    });


    // GET '/:name' will bring up the document of that particular person
    app.get('/:name', function(req, res) {
        Person.find({name: req.params.name}, function(err, person_detail) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                res.json(person_detail);
            };
        });
    });

} // end export