"use strict";
// Question 20:
// Write a JavaScript function that takes a string as input and removes all duplicate characters, returning the modified string.

const removeDuplicates = function (inputString) {
  const newString = [...new Set(inputString)].join("");
  return newString;
};
const text = "hello world";
console.log(removeDuplicates(text));
