// server/controllers/tasks.js

const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

    index: function(req, res) {
        Task.find({}, function(err, task_list) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json({ 'status': 200, 'tasks': task_list });
            }
        })
    },
    find_task: function(req, res) {
        Task.find({ _id: req.params.id }, function(err, task_detail) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json({ 'status': 200, 'tasks': task_detail });
            }
        })
    },
    create_task: function(req, res) {
        const new_task = new Task({ title: req.body.title, description: req.body.description, completed: req.body.completed })

        new_task.save(function(err) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json({ 'status': 200, 'message': "Created task" });
            }
        })
    },
    update_task: function(req, res) {
        Task.updateOne({ _id: req.params.id }, {$set: { title: req.body.title, description: req.body.description, completed: req.body.completed }}, function(err) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else { 
                res.json({ 'status': 200, 'message': "Updated task" });
            }
        })
    },
    delete_task: function(req, res) {
        Task.deleteOne({ _id: req.params.id }, function(err) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json({ 'status': 200, 'message': "Deleted task" });
            }
        })
    }

}