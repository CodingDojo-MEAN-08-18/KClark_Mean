// Assignment: JavaScript Hoisting
// Karen Clark
// 2018-08-09

// Objectives:
// 1. Practice reading JavaScript the same way as the interpreter reads it.

// Rewrite the code the way it would be seen by the interpreter and predict the output.

// 1
// console.log(hello);                                   
// var hello = 'world';       

var hello = 'world';        
console.log(hello);                                   
    

// 2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle = 'haystack';
var needle = 'magnet';
test();
function test(){
	console.log(needle); // 'magnet'
}


// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool';
console.log(brendan); // 'super cool'


// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food = 'chicken';
console.log(food); // 'chicken'
eat();
food = 'half-chicken';
console.log(food); // 'half-chicken'


// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// This doesn't work because you can't invoke `mean` that way
// It's a variable that invokes a function, not a function itself
// Not sure what to do here - I can't "hoist" it bc it's broken...


// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

console.log(genre); // undefined
rewind();
    var genre = "rock";
    console.log(genre); // 'rock'
    var genre = "r&b";
    console.log(genre); // 'r&b'
genre = "disco";
console.log(genre); // 'disco'


// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

var dojo = "san jose";
console.log(dojo); // 'san jose'
learn();
    dojo = "seattle";
    console.log(dojo); // 'seattle'
    dojo = "burbank";
    console.log(dojo); // 'burbank'
console.log(dojo); // 'san jose'


// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

console.log(makeDojo("Chicago", 65));
    const dojo = {};
    dojo.name = 'Chicago';
    dojo.students = 65;
    dojo.hiring = true;

console.log(makeDojo("Berkeley", 0));
    const dojo = {};
    dojo.name = 'Berkeley';
    dojo.students = 0;
    dojo = 'closed for now'; // returns an error because you 
                             // can't assign a value to const
