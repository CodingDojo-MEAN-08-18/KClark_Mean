const mongoose = require('mongoose');
const Task = mongoose.model('Task');

// TODO:
// Improve messages sent with data in response

module.exports = function Route(app, server) {

    // GET '/tasks' - retrieve all tasks
    app.get('/tasks', function(req, res) {
        Task.find({}, function(err, task_list) {
            if(err) {
                console.log(err);
                res.json({});
            } else {
                res.json(task_list);
            };
        });
    });


    // GET '/tasks/:id' - list task for that id
    app.get('/tasks/:id', function(req, res) {
        Task.find({ _id: req.params.id }, function(err, task_detail) {
            if(err) {
                console.log(err);
                res.json({});
            } else {
                res.json(task_detail);
            };
        });
    });


    // POST '/tasks' - create a task
    app.post('/tasks', function(req, res) {
        const new_task = new Task(req.body)

        new_task.save(function(err) {
            if(err) {
                console.log(err);
                res.json({});
            } else {
                console.log('New task created');
                res.json({});
            };
        });
    });

    // PUT '/tasks/:id' - update a task by id
    app.put('/tasks/:id', function(req, res) {
        Task.updateOne({ _id: req.params.id }, {title: req.body.title, description: req.body.description, completed: req.body.completed }, function(err, result) {
            if(err) {
                console.log(err);
                res.json({});
            } else { 
                console.log('Task updated');
                res.json({});
            }
        });
    });


    // DELETE '/tasks/:id/' - delete a task by id
    app.delete('/tasks/:id', function(req, res) {
        Task.deleteOne({ _id: req.params.id }, function(err, result) {
            if(err) {
                console.log(err);
                res.json({});
            } else {
                console.log('Deleted id: ' + req.params.id)
                res.json({});
            };
        });
    });

} // end export