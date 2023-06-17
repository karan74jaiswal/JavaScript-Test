"use strict";

// Question 8:
// Write a JavaScript function that takes a number as input and returns the factorial of that number.

const factorial = function (inputNumber) {
  let fact = 1;
  for (let i = inputNumber; i > 0; i--) {
    fact *= i;
  }
  return fact;
};
