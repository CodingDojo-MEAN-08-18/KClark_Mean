// Assignment: Fib + Nacci
// Karen Clark
// 2018-08-14

// The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.

// Using Closures, make the Fib function with the following specifications:
// function fib() {
//     // Some variables here
//     function nacci() {
//       // do something to those variables here
//     }
//     return nacci
//   }
//   var fibCounter = fib();
//   fibCounter() // should console.log "1"
//   fibCounter() // should console.log "1"
//   fibCounter() // should console.log "2"
//   fibCounter() // should console.log "3"
//   fibCounter() // should console.log "5"
//   fibCounter() // should console.log "8"

function fib() {
    var currentTotal = 0, newTotal = 1, tempVal;

    function nacci() {
        // TODO: There's gotta be some recursive thing I can do here 
        // instead. Need to research and implement that.
        tempVal = currentTotal;
        console.log(newTotal);

        currentTotal = newTotal;
        newTotal = currentTotal + tempVal;
    }

    return nacci;
}

  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "13"
  fibCounter() // should console.log "21"
  fibCounter() // should console.log "34"
  fibCounter() // should console.log "55"
  