const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  console.log('catching a route');
  response.sendFile(path.resolve('dist/public/index.html'));
});

module.exports = router;
