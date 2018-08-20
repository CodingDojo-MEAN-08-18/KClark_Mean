// With callbacks:
// function orderSupplies(item, callback) {
//     let warehouse;
//     const deliveryTime = Math.random() * 3000;

//     setTimeout(function() {
//         warehouse = {
//             paint: {
//                 product: "Neon green paint",
//                 directions: function() { return 'mix it!'}
//             },
//             brush: {
//                 product: "Horsehair paintbrush",
//                 directions: function() {return 'start painting!'}
//             },
//             tarp: {
//                 product: "Blue tarp",
//                 directions: function() {return 'protect the floor!'}
//             }
//         };

//         callback(warehouse[item]);
//     }, deliveryTime);
// }

// function receiveItem(item) {
//     console.log(`received ${ item.product }, time to ${ item.directions() }`);
// }

// orderSupplies('brush', receiveItem);
// orderSupplies('paint', receiveItem);

// CHALLENGE:
// Figure out how to ensure the order is correct - paint first

// orderSupplies('brush', handleBrush);

// function handleBrush(item){
//     console.log('brush', item);

//     if (havePaint) {
//         return receiveItem(item);
//     }
//     console.log('...checking for paint');
//     setTimeout(handleBrush, 10, item);
// }

// const items = ['tarp', 'paint', 'brush'];

// function order(items) {
//     const received = [];
//     let counter = 0;

//     for (var index = 0; index < items.length; index++) {
//         (function (number) {
//             orderSupplies(items[number], function (item) {
//                 received[number] = item;

//                 console.log('got' + item.product);
//                 counter++;

//                 if (received.filter(thing => thing).length === items.length) {
//                     received.forEach(receiveItem);
//                 }
//             });
//         }) (index)
//     }
// }

// order(items);


// promises have three states:
// pending
// resolve
// reject
// const paint = new Promise(function (resolve, reject){
//     orderSupplies('paint', resolve);
// });

// const brush = new Promise(function (resolve, reject){
//     orderSupplies('brush', resolve);
// });

// paint
//     .then(function (item) {
//         receiveItem(item);
//         // return brush;
//     })
//     .then(function () {
//         return brush;
//     })
//     .then(receiveItem)
//     .catch(console.log);

function orderSupplies(item) {
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            warehouse = {
                paint: {
                    product: "Neon green paint",
                    directions: function() { return 'mix it!'}
                },
                brush: {
                    product: "Horsehair paintbrush",
                    directions: function() {return 'start painting!'}
                },
                tarp: {
                    product: "Blue tarp",
                    directions: function() {return 'protect the floor!'}
                }
            };
        }
        
        resolve(warehouse[item]);
    }, deliveryTime;
}


const paint = orderSupplies('paint');
const brush = orderSupplies('brush');

console.log(paint, brush);

paint
    .then(function (item) {
        receiveItem(item);
    })