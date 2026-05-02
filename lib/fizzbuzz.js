"use strict";

let fizzbuzz = function (num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return num;
  }
};

let fb = fizzbuzz(6);
console.log(fb);

module.exports = fizzbuzz;
