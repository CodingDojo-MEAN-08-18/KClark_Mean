
module.exports = {
  fetch(request, response) {
    Weather.fetch({})
      .then(tasks => response.json(tasks))
      .catch(console.log)
  },
};
