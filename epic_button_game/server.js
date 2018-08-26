const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000, function() {
    console.log('Listening on port 8000');
});


var counter = 0;

app.get('/', function(req, res) {
    res.render('index')
});

const io = require('socket.io').listen(server);

io.on('connection', function (socket) { 
    console.log('socket connection available');

    socket.on('update_count', function (data) { 
        counter++;
        socket.emit('server_response', {counter: counter });
    });

    socket.on('reset_count', function(data) {
        counter = 0;
        socket.emit('server_response', {counter: counter });
    })
});

