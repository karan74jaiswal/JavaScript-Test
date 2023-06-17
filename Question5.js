"use strict";
// Question 5
// Write a JavaScript function that takes a number as input and checks if it is even or odd. Return "Even" if the number is even, and "Odd" if the number is odd.
const evenOddChecker = (inputNumber) =>
  inputNumber % 2 === 0 ? "Even" : "Odd";
console.log(evenOddChecker(4));
