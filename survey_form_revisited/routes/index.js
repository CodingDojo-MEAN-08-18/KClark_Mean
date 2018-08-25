module.exports = function Route(app, server) {
    const io = require('socket.io').listen(server);

    app.get('/', function(req, res) {
        res.render('index')
    });

    io.sockets.on('connection', function (socket) { 
        console.log('socket connection available');

        socket.on('posting_form', function (data) { 
            // generate random number to return
            var random_number = Math.floor((Math.random() * 1000) + 1);
            socket.emit('updated_message', {response: data });
            socket.emit('random_number', {response: random_number });
        });
    });
}