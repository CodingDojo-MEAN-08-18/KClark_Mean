const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    response.render('index', {title: 'Survey Form'})
});


app.post('/submitsurvey', function(request, response) {
    survey_data = request.body;
    response.redirect('/result');
});


app.get('/result', function(request, response) {
    response.render('result', {survey: survey_data});
});


app.listen(8000, function() {
    console.log('listening on 8000');
});
