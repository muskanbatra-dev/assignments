// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares() {
//   let square1 = square(a);
//   let square2 = square(b);
// }

// let ans = sumOfSquares(1, 2);
// console.log(ans);

// // lets add a sum of cube function to it

// function sumOfCube() {
//   let square1 = cube(a);
//   let square2 = cube(b);

//   return square1 + square2;
// }

// let ans2 = sumOfCube(1, 2);
// console.log(ans2);

// // lets remove the repition of codeß

// function sumOfSomething(a, b, callbackfunction) {
//   let square1 = callbackfunction(a);
//   let square2 = callbackfunction(b);
//   return square1 + square2;
// }

// let ans3 = sumOfSomething(1, 2, square);
//  A callback is passing a function as an argumentß

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
