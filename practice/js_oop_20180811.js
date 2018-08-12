// ******** OOP *********
////// Example one:  CONSTRUCTOR BASICS
// function personConstructor(name, age) {
//     // an object literal that will be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // create the 'steve' instance, run greet
// var steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// var anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personConstructor("Emily", 22);
// emily.greet = function() {
//     console.log("I am the greatest, ever!");
// };
// emily.greet();

////// Example two: THIS AND NEW
// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// // the 'new' keyword causes our constructor to return the object we expected.
// var anika = new personConstructor('Anika', 33);
// anika.greet();
// console.log(anika);

// var emily = new personConstructor("Emily", 22);
// // using this & new, we can now refer to the 'name' attribute of our instance!
// emily.greet = function() {
//     console.log("My name is " + this.name + " and I'm the coolest ever!");
// }
// emily.greet();

////// Example three: PRIVACY
// the naming convention for Classes and Object Constructors is that they're capitalized and singular
// function Person(name, age) {
//     var privateVariable = "This variable is private";
//     var privateMethod = function() {
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// var eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable);
// -- result is 'undefined'!


////// Example four:  'THIS' PROBLEM WORKAROUND
// function Person(name, age) {
//     var self = this;
//     var privateVariable = "This variable is private";
//     var privateMethod = function() {
//         console.log("this is a private method for " + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// var joe = new Person("Joe", 23);
// joe.greet();

////// Example five:  .PROTOTYPE
////// THIS IS JUST FOR ILLUSTRATING CONCEPTS! DON'T DO THIS!
// var MyObjConstructor = function(name) {
//     var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
//     this.name = name; // but you can see the name!
//     this.method = function() {
//       console.log( "I am a method");
//     };
//   }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);
  
// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // anotherProperty!
// console.log(obj1.newProperty); // newProperty!
// // What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
  
////// Major PROS of Prototype
// * One memory space for all! If you are creating lots of the same object and use prototype, it can save you significant memory
// * Great for general methods for objects
// * We can access prototype methods with just using .method or .property.
// * The interpreter will go through all prototypes in the prototype chain to check if any of them have the called method or property before giving up (it'll return/use the first match it finds).
////// Major CONS of Prototype
// * Methods generated in prototype cannot access the private variables inside the constructor function
// * Lots of prototypes can be hard to read

////// Example six: MORE ON PROTOTYPES:
// function Cat(catName) {
//     var name = catName;
//     this.getName = function() {
//       return name;
//     };
//   }
//   // adding a method to the cat prototype
//   Cat.prototype.sayHi = function() {
//     console.log('meow');
//   };
//   //adding properties to the cat prototype
//   Cat.prototype.numLegs = 4;
//   var muffin = new Cat('muffin');
//   var biscuit = new Cat('biscuit');
//   console.log(muffin, biscuit);
//   // we access prototype properties the same way as we would access 'own' properties
//   muffin.sayHi();
//   biscuit.sayHi();
//   console.log("Muffin has " + muffin.numLegs + " legs");
//   // we may change an instance's attributes rather than keeping the value set by prototype
//   muffin.numLegs = 3;
//   console.log("Muffin has " + muffin.numLegs + " legs");
  // poor mutant cats: muffin.__proto__.numLegs ++;
  // doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs
  
////// Example seven:  SOFT PRIVACY & METHOD CHAINING
//// Private variables are scoped to the constructor with the 'var' keyword
// function Car(make, model) {
//     var odometer = 0;
//     this.make = make;
//     this.model = model;
    
//     // To make functions private, we scope them to the constructor
//     function updateOdometer(distance) {
//         odometer += distance;
//     };
    
//     // 'Getter' functions help us read private variables
//     this.readOdometer = function() {
//       return odometer;
//     }
    
//     // 'Setter' functions help us update private variables
//     this.drive = function(distance) {
//       updateOdometer(distance);
//       // return this will allow us to chain methods
//       return this;
//     }
// }
// var myCarInstance = new Car("Chevy", "Camaro");
// // by returning this, we can chain drive()
// myCarInstance.drive(50).drive(90); 
// // private variable is undefined
// console.log(myCarInstance.odometer);
// // but we can read it with our getter function
// console.log(myCarInstance.readOdometer());
