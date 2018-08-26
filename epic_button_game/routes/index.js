module.exports = function Route(app, server) {
    const io = require('socket.io').listen(server);

    // TODO:  instantiate counter
    
    app.get('/', function(req, res) {
        res.render('index')
    });

    io.sockets.on('connection', function (socket) { 
        console.log('socket connection available');

        socket.on('update_count', function (data) { 
            counter = counter + 1;
            socket.emit('updated_message', {response: data });
        });

        socket.on('reset_count', function(data) {
            counter = 0;
            socket.emit('updated_message', {response: data });
        })
    });
}