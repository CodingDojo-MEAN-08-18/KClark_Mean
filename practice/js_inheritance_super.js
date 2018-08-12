// ****** Inheritance and Super *******
//// Example one:  Inheritance and Super
// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
// }
// // we can now create Circles
// const circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();

//// Example two:  Methods
//// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
//     }
// }
//// child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
// }

//// Example three: Super (Continued)
//// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
//// child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const circle = new Circle(1, 2, 3);
// circle.childFunction();
