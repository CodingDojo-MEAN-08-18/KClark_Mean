const express = require('express');
const app = express();
     
// ...other middleware...
     
const server = app.listen(1337);
const io = require('socket.io')(server);
    
io.on('connection', function (socket) { 
  
  socket.on('alpha', function (data) { 
    // socket.emit will respond back to the socket client that triggered this 'alpha' listener
    socket.emit('updateClient', { data: 5 });
  });
  socket.on('beta', function (data) { 
    // io.emit will message all socket clients 
    io.emit('updateAllClients', { data: 5 });
  });
  socket.on('gamma', function (data) { 
    // socket.broadcast will message all socket clients except the one that triggered the 'gamma' listener
    socket.broadcast.emit('updateAllExceptOne', { data: 5 });
  });
});
