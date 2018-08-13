// Assignment I: JavaScript Library
// Karen Clark
// 2018-08-12

// Finish the five methods attached to the _ object to create your own custom library. The purpose of this assignment is to show how a simple JavaScript library can be made. 
// Consider the below example:
// Can we make this into a method of an object?
// function each(arr, callback) {
//     // loop through the array
//     for(var i = 0; i < arr.length; i++) {
//          callback(arr[i]); // invoking the callback many times... delegation!
// Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below. 
// To create your own custom JavaScript library, you will just add methods to a JS object
// NOTE: Reference at https://underscorejs.org/

var _ = {
    map: function(arr, callback) {
        if (typeof callback === 'function') {
            var newArr = [];
            for(let i = 0; i < arr.length; i++) {
                newArr.push(callback(arr[i]));
            }
        }
        return newArr;
    },
    reduce: function(arr, callback, memo) { 
        if (typeof callback === 'function') {
            var newVal = memo;
            for(let i = 0; i < arr.length; i++) {
                newVal += arr[i];
            }
        }
        return newVal;
    },
    find: function(arr, callback) {   
        if (typeof callback === 'function') {
            var newArr = [];
            for(let i = 0; i < arr.length + 1; i++) {
                if (callback(arr[i]) === true) {
                    return arr[i];
                }
            }
        }  
    },
    filter: function(arr, callback) { 
        if (typeof callback === 'function') {
            var newArr = [];
            for(let i = 0; i < arr.length; i++) {
                if (callback(arr[i]) === true) {
                    newArr.push(arr[i]);
                }
            }
        }
        return newArr;
    },
    reject: function(arr, callback) { 
        if (typeof callback === 'function') {
            var newArr = [];
            for(let i = 0; i < arr.length; i++) {
                if (callback(arr[i]) === false) {
                    newArr.push(arr[i]);
                }
            }
        }
        return newArr;
    }
  }
 // you just created a library with 5 methods!

 
// //// _.map()
// var timesThree = _.map([1, 2, 3], function(num){ return num * 3; });  // should return [3, 6, 9]
// console.log("map - timesThree: ", timesThree);
// //// _.reduce()
// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log("reduce - sum :", sum);
// //// _.find()
// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // should return 2
// console.log("find - even: ", even); 
// //// _.filter()
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // should return [2,4,6].
// console.log("filter - evens: ", evens); 
// //// _.reject()
// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // should return [1, 3, 5]
// console.log("reject - odds :", odds);
