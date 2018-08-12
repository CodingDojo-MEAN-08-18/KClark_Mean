// ****** ES6 Classes ******

//// Example one:  Class and constructor
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         console.log("You created a Dot!");
//     }
// }
// const dot1 = new Dot(10, 10);

//// Example two:  ES5 vs ES6
// ES5 way
// function Dot(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Dot.prototype.showLocation = function() {
//     console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// var dot1 = new Dot(55, 20);
// dot1.showLocation();
// // ES6 way
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() { // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// const dot2 = new Dot(5, 13);
// dot2.showLocation();

//// Example three:  Class Methods vs Instance Methods
//// In ES6, class methods are called 'static methods' while instance methods are called 'prototype methods'. 
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     // prototype method
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // static method
//     static getHelp() {
//         console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//     }
// } 
// const dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(dot3.getHelp);
// // however we can call getHelp this way:
// Dot.getHelp();