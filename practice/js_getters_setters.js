// ******* Getters and Setters *******
//// Example one:  Getters
// class Pizza {
//     constructor(radius, slices) {
//         this.radius = radius;
//         this._slices = slices;
//     }
//     get slices () { 
//         return this._slices; 
//     }
//     set slices (slices) { 
//         this._slices = slices;
//     }
// };

// const pie = new Pizza(12, 6);
// console.log(pie.slices); // we use the getter to determine how many slices we have
// pie.slices = 12;         // the setter will change the number of slices
// console.log(pie.slices); // use the getter again to make sure our slices have doubled

//// Example two:  Custom Getters
// class Circle{
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//     get diameter() {
//         return this.radius * 2;
//     }
// }
// const circle1 = new Circle(1, 2, 5);
// console.log(circle1.diameter);
