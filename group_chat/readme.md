Assignment: Group Chat

Karen Clark

2018-08-26

Create a simple app where multiple people can go to your nodeJS app and start chatting with each other. You could connect to your web app from multiple browsers (one from Safari, one from Firefox, one from Chrome for example) to mimic multiple people visiting your site. Use javascript 'prompt' to get the user's name. Your chat board should update in real time and even show all the chats that occurred before the user joined the room.

Before you start coding this, first outline or write down the steps of accomplishing this, outlining the names of the event that will be submitted from the server -> client, or from client -> server. Create these outline in ordered steps first and then start creating your codes.


Plan of attack:

1. Server renders views/index.ejs with HTML content

2. Upon initial page load, client is asked for their name. That is stored in a variable called 'username'.

3. Once client has given name, taken to chat window. Console logs the name of the connected user with a short message

4. 
5.
6.