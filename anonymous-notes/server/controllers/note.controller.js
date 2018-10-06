const Note = require('mongoose').model('Note');
const { Http } = require('@status/codes');

module.exports = {
  index(request, response) {
    Note.find({})
      .then(notes => response.json(notes))
      .catch(console.log);
  },
  create(request, response) {
    Note.create(request.body)
      .then(note => response.json(note))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );
        
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  show(request, response) {
    Note.findById(request.params.note_id)
      .then(note => response.json(note))
      .catch(console.log);
  }
};
