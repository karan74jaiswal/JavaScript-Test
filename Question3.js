"use strict";
// Question 3:
// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
const average = (inputArray) => {
  let sum = 0;
  for (const el of inputArray) {
    sum += el;
  }
  return sum / inputArray.length;
};

console.log(average([2, 4, 6, 8]));
