const users = {};

const messages = [];

// function isUser(user) {
//   const usersCount = users.length;

//   for (var i = 0; i < usersCount; i++) {
//     if (user == users[i]) {
//       return true;
//     }
//   }
//   return false;
// }

class User {
  constructor(uid, name){
    this.uid = uid;
    this.name = name;
  }
}

class Message {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }
}

module.exports = function Route(app, server) {
  const io = require("socket.io").listen(server)

  io.sockets.on("connection", function(socket) {
    socket.on("page_load", function(name) {

      const user = new User (socket.id, name);
      users[user.uid] = user;
      
      // const existingUser = isUser(data.user);
      // const event = existingUser ? 'existing_user' : 'load_messages';
      // const data2 = existingUser ? {
      //               error: "This user already exits"
      //             } : { current_user: data.user, messages: messages };

      // if (!existingUser) {
      //   users.push(data.user);
      // }

      // TODO:
      // fire system message new user joined (everyone but self)
      // make past conversation available to new user? Yep - show // them the past n messages...
      // send user list "current users: foo, bar, baz"
      // post new message (everyone gets it)
      // log off (reload or close) == new socket
      // remove user, broadcast (everyone get it) - "Foo has left"


      socket.emit(event, data);
    });

    socket.on("new_message", function(data) {
      messages.push({ name: data.user, message: data.message });
      io.emit("post_new_message", { new_message: data.message, user: data.user });
    });
  });

  app.get("/", function(request, response){
    response.render("index")
  });
};