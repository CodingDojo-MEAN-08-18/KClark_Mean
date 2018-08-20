var express = require('express');
var bodyParser = require('body-parser');

var session = require('express-session');
var app = express();
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.get('/', function(request, response) {
    response.render('index', {title: 'my Express project'});
});


app.get('/users', function(request, response) {
    var users_array = [
        {name: "Michael", email:"michael@codingdojo.com"},
        {name: "Jay", email:"jay@codingdojo.com"},
        {name: "Brendan", email:"brendan@codingdojo.com"},
        {name: "Andrew", email:"andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});


app.post('/users', function(request, response){
    request.session.name = request.body.name;
    console.log("session name " + request.session.name);
    // console.log('POST DATA \n\n', request.body);
    response.redirect('/');
});


// Error thrown with the way of doing this in the platform text:
// The user id requested is:  1
// Sun, 19 Aug 2018 23:39:31 GMT express deprecated res.send(status, body): Use res.status(status).send(body) instead at server.js:25:14
app.get('/users/:id', function(request, response) {
    console.log('The user id requested is: ', request.params.id);
    response.status(200).send(('You requested the user with id: ', request.params.id));
});


app.listen(8000, function() {
    console.log('listening on 8000');
});

