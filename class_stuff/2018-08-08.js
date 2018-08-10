///////////// OBJECTS ////////////////

function Person(name, items) {
    // const person = {
    //     // name: name,
    //     name
    // };

    if (!(this instanceof Person)) {
        console.log('not an instance of Person') ;
        return new Person(name, items);
    }

    this.name = name;
    this.items = items;
    // this.take = take;

};

Person.prototype.take = function take(item, target) {
    // console.log(typeof target); => result is 'object'
    // console.log(target.items instanceof Array); => result is 'true'
    // console.log(Array.isArray(target.items)); // => result is 'true'
    if (!target || !Array.isArray(target.items)) {
        throw new Error('target items is not an array'); 
    }

    for (let index = 0; index < target.items.length; index++) {
        if (target.items[index] === item) {
            // slice: slice(index, index + 1) => ['gold'] AND orig stays same
            // splice: splice(index, index + 1) => ['gold'] AND orig is mutated!
            this.items.push(item);
            target.items.splice(index, 1);

            return true;
        }
    }
    return false;
};

Person.prototype.toString = function () {
    return this.name;
}

const person1 = Person('Bob', ['keys', 'change', 'mints']);
const person2 = Person('Sally', ['gold', 'lint', 'phone']);

console.log(person1);
console.log(person2);

person1.take('gold', person2);

console.log(person1);
console.log(person2);

console.log(person2.toString());

const backpack = {
    items: ['compass', 'map', 'matches'],
};

console.log(backpack);
person2.take('matches', backpack);
console.log(backpack);


//////////// VARIABLE SCOPE ///////////////
// function counter() {
//     var count = 0;

//     function childScope() {
//         console.log('child called');
//         return ++count;
//     }

//     return childScope();
// }

// console.log(counter())
// console.log(counter())
// console.log(counter())


// // console.log(counter())
// // => 1
// // console.log(counter())
// // => 2
// // console.log(counter())
// // => 3

// function counter() {
//     var count = 0;

//     function childScope() {
//         console.log('child called');
//         return ++count;
//     }

//     return childScope;
// }
// counter = counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // Result:
// // child called
// // 1
// // child called
// // 2
// // child called
// // 3

// function anotherFunc(func) {
//     if (typeof func == 'function') {
//         console.log('inside another', func);
//     }
// }

// anotherFunc(counter);

