const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');

module.exports = {
  index(request, response) {
    Author.find({})
      .then(authors => response.json(authors))
      .catch(console.log);
  },
  create(request, response) {
    Author.create(request.body)
      .then(author => response.json(author))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );
        
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  show(request, response) {
    Author.findById(request.params.author_id)
      .then(author => response.json(author))
      .catch(console.log);
  },
  update(request, response) {
    Author.findByIdAndUpdate(
      request.params.author_id,
      { $set: request.body },
      { new: true, runValidators: true }
    )
      .then(author => response.json(author))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params.author_id)
      .then(author => response.json(author))
      .catch(console.log);
  },
};
