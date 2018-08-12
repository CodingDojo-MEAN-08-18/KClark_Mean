// ******* CALLBACKS ********
//// Example one:
// var ninja = 'Karen'
// setTimeout( function () { console.log(ninja); }, 2000);
// console.log(ninja)

//// Example two:
// var a = 2;
// var b = function() { console.log('something'); };
// function doSomething(x) {
//     console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

//// Example three:
// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function') {
//         console.log('possiblecallback is a callback!');
//         possibleCallback();
//     } else {
//         console.log('possiblecallback: ', possibleCallback, ' is not a callback function');
//     }
// }

// doSomething(function myCallBack() { console.log('yes, I am a callback!')});
// doSomething('string');

//// Example four:
// function makePasta(pasta, makeSauce) {
//     console.log('Boiling water');
//     console.log('Putting '  + pasta + ' pasta in the water');
//     // var for sauce
//     var sauce = makeSauce();
//     console.log('Mixing sauce');
//     console.log('Pasta is done!');
//     return pasta + ' pasta with ' + sauce + ' sauce! Voila!';
// }

// function makePesto() {
//     console.log('Making Pesto');
//     return 'pesto';
// }

// function makeAlfredo() {
//     console.log('Making Alfredo');
//     return 'alfredo';
// }

// console.log(makePasta('Penne', makePesto));
// console.log(makePasta('Farfalle', makeAlfredo));
