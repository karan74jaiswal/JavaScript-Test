"use strict";
// Question 11:
// Write a JavaScript function that takes an array of objects representing students and returns an array of their names.

const getStudentNames = function (students) {
  const studentNames = [];
  for (const { name } of students) {
    studentNames.push(name);
  }
  return studentNames;
};
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Sam", age: 19 },
];
console.log(getStudentNames(students));
