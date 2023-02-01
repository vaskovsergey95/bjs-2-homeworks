"use strict";

let decision = [];
function solveEquation(a, b ,c) {
  let d = b ** 2 - 4* a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    decision.push(x1, x2);
  }
  else if (d === 0) {
    let x3 = d - b/(2*a);
    decision.push(x3);
}
  else {
    return decision;
  }
}
solveEquation(3, 40, -110);
console.log(decision)

// "use strict"
// function solveEquation(a, b, c) {
//   let arr = [];
//
//   return arr;
// }