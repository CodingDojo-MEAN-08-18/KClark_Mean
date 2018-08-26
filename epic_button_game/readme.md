Assignment: Epic Button Game

Karen Clark

2018-08-25

For this assignment, build the app described in the mockup below using Express and sockets.  Your app should serve only a single view, index.ejs.  Any time the epic button is pushed, the count should update on every user who is connected via sockets.  This should happen in real time.  If a user clicks the reset button, the count should reset to 0 for every user as well!

Think about the events the client will need to listen for and the events the server must listen for.  Map out the emitters and listeners you will need before you start coding.  Use a variable on the server to keep track of how many times the button has been clicked.  

Plan of attack:
1. Server renders views/index.ejs that contains the button
2. The variable 'counter' is initialized to 0 
3. The user pushes the button
4. The blue button push is emitted to the server with the event name 'update_count'
5. The server listens for the event 'update_count'. When the event is triggered, 'counter' is incremented and the new value of the variable is emitted to the client in the event called 'server_response'
6. The client listens for the event called 'server_response' and when it is triggered, the 'counter' is updated.
7. If the user pushes the red button, the 'reset_count' message is emitted to the server. The server resets the value of 'counter' variable and the result is returned to the client in the event called 'server_response'
8. (Repeat #6)
