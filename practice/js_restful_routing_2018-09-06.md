Restful Routing

So far we have been using 'GET' and 'POST' requests for all of our HTTP needs. This will suffice in most situations, however, the challenge presents itself when hundreds of companies choose their own unique patterns of 'GET' and 'POST' requests for similar requests to their servers. This becomes particularly challenging when these companies open their APIs to the public, and we, as developers using these APIs, need to learn each company's version of the 'get me all the Widgets' HTTP request. Here are a few examples of different companies GET request to retrieve all Widgets:

'GET' http://companyA.com/getAllWidgets
'GET' http://companyB.com/myWidgets
'GET' http://companyC.com/allWidgets
'GET' http://companyD.com/Widgets/all

Which company is right? Which one is wrong? There is no right or wrong way of setting up your server's routing rules (certainly there are more appropriate-looking patterns). However, without an industry standard, it does pose a consistency challenge. This is why the industry adopted 'Restful Routing' as a standard, which gives us a pattern to follow, which is clean and simple. Here are the restful routes:

Action	Client HTTP Request	Server Routing Rule
Retrieve all widgets	'GET' http://company.com/widgets	app.get("/widgets", (req, res) => { 

})

Retrieve 1 widget with the id of 7	'GET' http://company.com/widgets/7	app.get("/widgets/:id", (req, res) => { 

})

Create a widget	'POST' http://company.com/widgets 
(New Widget Object Included)	app.post("/widgets", (req, res) => { 

})

Update 1 widget with the id of 7	'PUT' http://company.com/widgets/7 
(Updated Widget Object Included)	app.put("/widgets/:id", (req, res) => { 

})

Delete 1 widget with the id of 7	'DELETE' http://company.com/widgets/7	app.delete("/widgets/:id", (req, res) => { 

})

'PUT' is similar to a POST request, along with the ID passed through the URL, we will also send the new up-to-date object we want to use for the update.

'DELETE' is similar to a GET request, meaning we simply need the id of the widget we want to delete.

For all other HTTP requests more unique than the list above, we would have to make our own custom routes. At least now we have a starting point, which is far better than starting from none.

Keep this pattern in mind as you build out your future assignments and projects. The more you use it, the sooner you'll get used to it. Later when you work on other projects, you will learn to really appreciate the benefits of using the industry standard 'Restful Routes'.