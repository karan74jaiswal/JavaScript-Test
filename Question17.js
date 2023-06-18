"use strict";
// Question 17:
// Write a JavaScript function that takes a sentence as input and checks if it is a pangram (contains every letter of the alphabet).
function isPangram(inputString) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (const alphabet of alphabets) {
    if (!inputString.toLowerCase().includes(alphabet)) {
      return false;
    }
  }
  return true;
}
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence));
