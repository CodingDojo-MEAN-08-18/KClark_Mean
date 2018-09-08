const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = function Route(app, server) {

    // GET '/tasks' - retrieve all tasks
    app.get('/tasks', function(req, res) {
        Task.find({}, function(err, task_list) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                res.json(task_list);
            };
        });
    });

    // GET '/tasks/:id' will bring up the task of that particular id
    app.get('/tasks/:id', function(req, res) {
        Task.find({ _id: req.params.id }, function(err, task_detail) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                res.json(task_detail);
            };
        });
    });

    // POST '/tasks/:title/' will add a task into the database
    app.post('/tasks/:title', function(req, res) {
        const new_task = new Task({ title: req.params.title, description: req.params.description, completed: req.params.completed })

        new_task.save(function(err) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log('New task created');
                res.redirect('/');
            };
        });
    });

    app.put('/tasks/:id', function(req, res) {
        // TO BE ADDED
    });

    // DELETE '/tasks/:id/' will delete a task from the database
    app.delete('/tasks/:id', function(req, res) {
        Task.deleteOne({ _id: req.params.id }, function(err, result) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log('Deleted id: ' + req.params.id)
                res.redirect('/');
            };
        });
    });

} // end export