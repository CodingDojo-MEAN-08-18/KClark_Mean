// Assignment:  JavaScript Objects
// Karen Clark
// 2018-08-06

// ***** Challenge 1 *****
// Write a function that accepts an array of student objects, as shown 
// below. Print all of the students' names and their cohorts.
//
// Your console should look like the following when the function is called with the provided array.
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var index in students) {
    console.log('Name: ' + students[index].name + ', Cohort: ' + students[index].cohort);
}

// ***** Challenge 2 *****
// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.
//
// Your console should look like the following:
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function printUsers(users) {
    var count = 1;

    console.log('EMPLOYEES')
    for (var employee of users.employees) {
        empLen = employee.first_name.length + employee.last_name.length 
        empStr = count + " - " + employee.last_name + ", " + employee.first_name + " -"
        console.log(empStr.toUpperCase(), empLen);
        count++
    }
    console.log('MANAGERS')
    for (var manager of users.managers) {
        mgrLen = manager.first_name.length + manager.last_name.length 
        mgrStr = count + " - " + manager.last_name + ", " + manager.first_name + " -"
        console.log(mgrStr.toUpperCase(), mgrLen);
        count++
    }
}

printUsers(users);