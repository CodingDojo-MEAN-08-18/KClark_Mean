const Team = require('mongoose').model('Team');

module.exports = {
  // player
  index(request, response) {
    Team.find({})
      .then(team => response.json(team))
      .catch(console.log);
  },
  // player
  create(request, response) {
    Team.create(request.body)
      .then(newPlayer => response.json(newPlayer))
      .catch(error => {
        const errors = Ojbect.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(500).json(errors);
      });
  },
  //
  // TODO: Update embedded document with users choice
  //
  // player
  destroy(request, response) {
    Team.findOneAndRemove(request.params.team_id)
      .then(team => response.json(team))
      .catch(console.log);
  },
  // game status
  statusone(request, response) {
    Team.find({}, {playerName: 1, game1: 1})
      .then(status => response.json(status))
      .catch(console.log); 
  },
  // game status
  statustwo(request, response) {
    Team.find({}, {playerName: 1, game2: 1})
      .then(status => response.json(status))
      .catch(console.log); 
  },
  // game status
  statusthree(request, response) {
    Team.find({}, {playerName: 1, game3: 1})
      .then(status => response.json(status))
      .catch(console.log); 
  }
};
