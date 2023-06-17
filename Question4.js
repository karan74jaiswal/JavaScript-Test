"use strict";
// Question 4
// Write a JavaScript function that takes a string as input and returns the reverse of that string.

const stringReversal = (inputString) =>
  inputString.split("").reverse().join("");
console.log(stringReversal("OpenAI"));
