// var myStr = 'some string content';
// console.log(myStr);

// myStr = 234235;
// console.log(myStr);

var array = ['cat', 'dog'];
// console.log(array)

array.push('bird');
// console.log(array)

// console.log('push result??', array.push('new content'))

// for (var index = 0; index < array.length; index++) {
//     console.log("index " + index + " is " + array[index]);
// }

// // Option one
// for (var index in array) {
//     console.log("index", array[index]);
// }
// index cat
// index dog
// index bird


// // Option two
// for (var thing of array) {
//     console.log("thing", thing);
// }

// // thing cat
// // thing dog
// // thing bird

// // Option three
// for (var thing of array.entries()) {
//     console.log("thing", thing);
// }
// thing [ 0, 'cat' ]
// thing [ 1, 'dog' ]
// thing [ 2, 'bird' ]


// for (var thing of array.entries()) {
//     var index = thing[0];
//     var entry = thing[1];
//     console.log('thing', thing, index, entry)
// }

// Array destructuring
// for (var [index] of array.entries()) {
//     console.log('index', index);
// }
// index 0
// index 1
// index 2

// Age, hair color, height in feet
// Don't do this!!!
// var person = [23, 'brown', 6];
// console.log('person age', person[0]);

// Object literal
var person = {
    age: 23,
    hairColor: 'brown',
    height: 6, //feet
    eyeColor: 'purple',
    "eye-color": 'black',
    action: function () {
        console.log('hello');
    }
};

console.log('person age', person.age);

// Can create a JS property
// "eye-color" is quoted so that's allowed even
// though it fails if you try to access w/ dot notation
// Have to use square brackets instead
// console.log('person age', person.age, "eyes 1", person.eyeColor, "eyes 2", person['eye-color']);
// person age 23 eyes 1 purple eyes 2 black

// Be careful with variable names & properties of the object
// person.key doesn't exist
// key does exist (it's the keys of the object)
// for (var key in person) {
//     console.log('key', person.key, key)
// }
// key undefined age
// key undefined hairColor
// key undefined height
// key undefined eyeColor
// key undefined eye-color

// Do this with square brackets!
// for (var key in person) {
//     console.log('key', person[key], key)
// }
// key 23 age
// key brown hairColor
// key 6 height
// key purple eyeColor
// key black eye-color

// function sayHello(name) {
//     console.log('hello ' + name);
// }

// sayHello('Bob', true, 10);
// hello Bob


// function sayHello(name, ...rest) {
//     console.log(rest)
//     console.log('hello ' + name);
// }

// sayHello('Bob', true, 10);
// _result_:
// [ true, 10 ]
// hello Bob

// function sayHello(name, ...rest) {
//     console.log(rest)
//     console.log('hello ' + name);
// }

// console.log('returned content', sayHello('Bob', true, 10));
// _result_:
// [ true, 10 ]
// hello Bob
// returned content undefined

function sayHello(name, ...rest) {
    console.log(rest)
    console.log('hello ' + name);

    return name;
}

console.log('returned content', sayHello('Bob', true, 10));
// _result_:
// person age 23
// [ true, 10 ]
// hello Bob
// returned content Bob