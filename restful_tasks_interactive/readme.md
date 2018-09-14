Assignment: Restful Tasks Interactive

Karen Clark

2018-09-15


Objectives:
* Have an Angular app make an http request to an API when the user clicks a button
* Alter the DOM based on user interaction without refreshing the page

Right now, your Restful Tasks project is fetching data once the project is built. Let's give the power to the user! Alter your Restful Tasks assignment so that the user may click a button to fetch all the tasks and see them displayed in the browser. This happens without refreshing the page!

 Each task has a show button, which the user may click to view the details of the selected task below the main list. Selecting a different task will change the task being displayed. Again, this happens without refreshing the page.

Bonus challenge: Create an input field where the user may type the id of a particular task and fetch just that one task from the database and display it in the browser. Do this with the (keyup) method. Have it invoke a function in your class file and pass it $event as an argument. Yes, this will be difficult because Mongo id's are long and complicated. Can you think of a way to achieve the same thing while making the user experience better?