"use strict";
// Question 14:
// Write a JavaScript function that takes a string as input and capitalizes the first letter of each word.

const capitalizeWords = function (sentence) {
  let capitalizeString = [];
  for (const word of sentence.split(" ")) {
    capitalizeString.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return capitalizeString.join(" ");
};
const sentence = "this is a test";
console.log(capitalizeWords(sentence));
