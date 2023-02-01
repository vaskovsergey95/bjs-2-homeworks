"use strict";

function solveEquation(a, b ,c) {
  let arr = [];
  let d = b ** 2 - 4* a * c;
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  let x3 = d - b/(2*a);
  if (d > 0) {
    arr.push(x1, x2);
  }
  else if (d === 0) {
    arr.push(x3);
}
  return arr;
}
solveEquation(1, 2, -10);
