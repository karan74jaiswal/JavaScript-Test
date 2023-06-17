"use strict";
// Question 19:
// Write a JavaScript function that takes an array of objects representing products and returns the total price of all the products.
const products = [
  { name: "Apple", price: 0.5 },
  { name: "Orange", price: 0.8 },
  { name: "Banana", price: 0.3 },
];

const getTotalPrice = function (products) {
  let total = 0;
  for (const { price } of products) {
    total += price;
  }
  return total;
};
console.log(getTotalPrice(products));
