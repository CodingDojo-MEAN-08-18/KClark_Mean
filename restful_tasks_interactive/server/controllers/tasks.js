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
                res.json(task_list);
            }
        })
    },
    find_task: function(req, res) {
        Task.find({ _id: req.params.id }, function(err, task_detail) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json(task_detail);
            }
        })
    }

}