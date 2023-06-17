"use strict";
// Question 13:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];
const getEvenNumbers = function (numbers) {
  const evenArray = [];
  for (const number of numbers) {
    if (number % 2 === 0) evenArray.push(number);
  }
  return evenArray;
};
console.log(getEvenNumbers(numbers));
