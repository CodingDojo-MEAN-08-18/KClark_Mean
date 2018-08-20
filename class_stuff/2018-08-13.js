//// Class practice
//// ES6 anonymous functions
//// Callbacks

// Vanilla function:
// function map(array) {
//     const results = [];

//     for (let index = 0; index < array.length; index++) {
//         const square = array[index] * array[index];

//         console.log(index, array[index], square);
//     }

//     return results;
// }

// const numberArray = [99, 12, 45, 83];
// const results1 = map(numberArray);

// function map(array, callback) {
//     const results = [];

//     for (let index = 0; index < array.length; index++) {
//         const res = callback(array[index]);
//         console.log('res', res);

//         results.push(res);
//     }
//     return results;
// }

// const numberArray = [99, 12, 45, 83];
// const results1 = map(numberArray, function (element) {
//     const square = element * element;
 
//     console.log('calling callback', element, square);

//     return square;
// });
// console.log('results 1', results1);


// function map(array, callback) {
//     const results = [];

//     for (let index = 0; index < array.length; index++) {
//         const res = callback(array[index]);
//         console.log('res', res);

//         results.push(res);
//     }
//     return results;
// }

// const numberArray = [99, 12, 45, 83];

// const results1 = map(numberArray, function (element) {
//     const square = element * element;
//     // console.log('calling callback', element, square);
//     return square;
// });


// ES6 Anonymous function
// const results1 = map(numberArray, (element) => element * element);

// const results2 = map(numberArray, (num1, num2) => num1 + num2);

// console.log('results 2', results2);
// console.log('results 1', results1, numberArray);

// function getThingsFromDB(_query, callback) {

//     return setTimeout(function() {
//         const data = ['t1', 't2', 't3'];
//         console.log('running db query');
//         callback(data);

//         // return data;
//     }, 3000 );
// }

// const things = getThingsFromDB('select * from things;');
// console.log(things);

// getThingsFromDB('select * from things;', function (things) { 
    
//     console.log(things);

//     const results = map(things, element => element + ' <==> ' + element.toUpperCase());
// });



// function handleThings(things) { 
//     console.log(things);

//     const results = map(things, element => element + ' <==> ' + element.toUpperCase());
// };

// getThingsFromDB('select * from things;', handleThings); 


function orderSupplies(item, callback) {
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    setTimeout(function() {
        warehouse = {
            paint: {
                product: "Neon green paint",
                directions: function() { return 'mix it!'}
            },
            brush: {
                product: "Horsehair paintbrush",
                directions: function() {return 'start painting!'}
            }
        };

        callback(warehouse[item]);
    }, deliveryTime);
}

function receiveItem(item) {
    console.log(`received ${ item.product }, time to ${ item.directions() }`);
}

orderSupplies('brush', receiveItem);
orderSupplies('paint', receiveItem);

// CHALLENGE:
// Figure out how to ensure the order is correct - paint first
