"use strict";
// Question 7
// Write a JavaScript function that takes an array of strings as input and returns the concatenated string of all the elements.

const concatenatedString = function (arrString) {
  let newString = "";
  for (const el of arrString) {
    newString += el;
  }
  return newString;
};
console.log(concatenatedString(["Hello", " ", "world!"]));
