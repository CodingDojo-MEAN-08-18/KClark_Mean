// server/config/routes.js

module.exports = function(app) {

    const task = require('../controllers/tasks.js');

    // GET '/tasks' - retrieve all tasks
    app.get('/tasks', function(req, res) {
        task.index(req, res);
    });

    // GET '/tasks/:id' - list task for that id
    app.get('/tasks/:id', function(req, res) {
        task.find_task(req, res);
    });

    // POST '/tasks' - create a task
    app.post('/tasks', function(req, res) {
        task.create_task(req, res);
    });

    // PUT '/tasks/:id' - update a task by id
    app.put('/tasks/:id', function(req, res) {
        task.update_task(req, res);
    });

    // DELETE '/tasks/:id/' - delete a task by id
    app.delete('/tasks/:id', function(req, res) {
        task.delete_task(req, res);
    });

}