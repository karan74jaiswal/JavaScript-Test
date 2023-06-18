"use strict";
// Question 16:
// Write a JavaScript function that takes a number as input and returns the Fibonacci sequence up to that number.
const limit = 10;
function getFibonacciSequence(limit) {
  let a = 0;
  let b = 1;
  let sum = a + b;
  const fibonacciArr = [a, b];
  while (sum <= limit) {
    fibonacciArr.push(sum);
    a = b;
    b = sum;
    sum = a + b;
  }
  return fibonacciArr;
}
console.log(getFibonacciSequence(limit));
