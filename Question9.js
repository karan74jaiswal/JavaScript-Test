"use strict";
// Question 9:
// Write a JavaScript function that takes a string as input and checks if it is a palindrome. Return true if it is a palindrome, and false otherwise. (A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.)

const palindromeChecker = function (inputString) {
  const reverseString = inputString.split("").reverse().join("");
  return inputString === reverseString;
};
palindromeChecker("radar");
