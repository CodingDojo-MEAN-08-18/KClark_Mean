// Assignment: Debugging TS
// Karen Clark
// 2018-09-04

// 1.
var myString: string;
myString = "Bee stinger";
// FIX: myString is defined as string. All values assigned
// must also be strings
myString = "9";


// 2. 
 function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 console.log(sayHello("Kermit"));
// FIX:  sayHello() takes a string as an argument
// updating the value to a string worked
 console.log(sayHello("9"));
 

// 3. 
 function fullName(firstName: string, lastName: string, middleName?: string){
    if (middleName !== undefined) {
        return `${firstName} ${middleName} ${lastName}`;
    } 
    return `${firstName} ${lastName}`;
}
 console.log(fullName("Mary", "Moore", "Tyler"));
 // FIX: First, we make 'middleName' an optional parameter
 // Then, we check to see if it's undefined, in which case we
 // don't return it
 console.log(fullName("Jimbo", "Jones"));
 

// 4. 
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 console.log(graduate(christine));
 // FIX:  The variable 'belts' had a typo ('belt')
 console.log(graduate(jay));
 

// 5.
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // FIX:  Have to make an instance of the Ninja class
 const shane = new Ninja("Shane", "Black");
 // FIX:  Also have to make an instance of the Ninja class 
 const turing = new Ninja("Alan", "Turing");

 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // FIX: Now that 'turing' is an instance of Ninja, it works
 console.log(study(turing));
 
// 6.
var increment = x => x + 1;
console.log(increment(3));
var square = x => x * x;
console.log(square(4));
// FIX: Needed to wrap the param in parens, and remove braces
var multiply = (x, y) => x * y;
// FIX: This needed to be turned into a function
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
console.log(math(4, 5));

// 7. 
class Elephant {
    constructor(public age: number){}
    // FIX: Inference allows us to make use of 
    // the incoming 'age' parameter
    birthday = () => {
        this.age++;
    }
}
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 