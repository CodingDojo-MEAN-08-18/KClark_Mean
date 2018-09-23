const Task = require('mongoose').model('Task');

module.exports = {
  index(request, response) {
    Task.find({})
      .then(tasks => response.json(tasks))
      .catch(console.log)
  },
  create(request, response) { 
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(500).json(errors);
      })
  },
  show(request, response) {
    Task.findOne(request.params.task_id)
      .then(task => response.json(task))
      .catch(console.log)
   },
  update(request, response) { 
    Task.findOneAndUpdate(request.params.task_id, { $set: request.body }, { new: true })
      .then(task => response.json(task))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(500).json(errors);
      })
  },
  destroy(request, response) {
    Task.findOneAndDelete(request.params.task_id)
      .then(task => response.json(task))
      .catch(console.log)
   },
};
