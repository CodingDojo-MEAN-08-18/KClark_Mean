//// Example one
// function mystery(arr) {
//     var temp = 0;
//     for (var i = 1; i < arr.length; i++) {
//         console.log("i is ", i);
//         if(arr[i] < arr[temp]) {
//             temp = i;
//             console.log("first loop", temp);
//         }
//     }
//     var result = arr[temp];
//     console.log("result is originally ", result);
//     for (temp; temp < arr.length - 1; temp++) {
//         console.log("second loop ", temp);
//         arr[temp] = arr[temp + 1];
//     }
//     arr.pop();
//     return result;
// }

// //// Example two:
// function mystery(arr){
//     var temp = 0;
//     for(var i=1; i<arr.length; i++){
//         if(arr[i] < arr[temp]){
//             temp = i;
//         }
//     }
//     var result = arr[temp];
//     for(temp; temp<arr.length-1; temp++){
//         arr[temp] = arr[temp+1];
//     }
//     arr.pop();
//     return result;
// }


console.log(mystery([9, 1, 2, 3, 4, -2, -3, 5]));