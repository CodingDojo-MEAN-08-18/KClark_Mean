var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: 'correct-horse-battery-staple',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    // If there's no value for counter, make it 1
    if (!request.session.counter) {
        request.session.counter = 1;
    }
    // Otherwise, add one to the current count
    else {
        request.session.counter = request.session.counter + 1;
    }
    response.render('counter', {'counter': request.session.counter});
});

// Support for button to add two to the current count
app.post('/plustwo', function(request, response) {
    // If there's no session value for counter, make it 2
    // because this is the +2 case!
    if (!request.session.counter) {
        request.session.counter = 2;
    }
    // Otherwise, add two to the current count
    else {
        request.session.counter = request.session.counter + 2;
    }
    response.render('counter', {'counter': request.session.counter});
});

// Support to reset the counter to 1
app.post('/reset', function(request, response) {
    // This works even if there's no value for counter yet
    request.session.counter = 1;
    response.render('counter', {'counter': request.session.counter});
});



app.listen(8000, function() {
    console.log('listening on 8000');
});
