"use strict";
// Question 10:
// Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.

const largestNumber = function (inputArray) {
  let largestNumber = inputArray[0];
  for (const el of inputArray) {
    largestNumber = largestNumber < el ? el : largestNumber;
  }
  return largestNumber;
};
console.log(largestNumber([4, 2, 9, 5]));
