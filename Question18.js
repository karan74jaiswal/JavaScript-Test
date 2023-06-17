"use strict";
// Question 18:
// Write a JavaScript function that takes an array of numbers as input and returns the sum of the squares of those numbers.
const sumSquares = function (numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number * number;
  }
  return sum;
};
const numbers = [1, 2, 3, 4];
console.log(sumSquares(numbers));
