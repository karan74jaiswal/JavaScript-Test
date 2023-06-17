"use strict";
// Question 6
// Write a JavaScript function that takes a year as input and checks if it is a leap year. Return true if it is a leap year, and false otherwise. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)

const checkLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;

console.log(checkLeapYear(2024));
