"use strict";
// Question 12:
// Write a JavaScript function that takes a sentence as input and returns an object containing the count of each word in the sentence.
const sentence = "This is a sentence is a test";
function countWords(sentence) {
  const wordCount = {};
  for (const word of sentence.split(" ")) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
console.log(countWords(sentence));
