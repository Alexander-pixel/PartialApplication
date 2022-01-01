'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

let arr = [];
const curry = (length, fn) => (...args) => {
  if (length > args.length) {
    arr.push(...args);
    if (arr.length === length) {
      const res = arr;
      arr = [];
      return fn(...res);
    }
    return curry(length, fn);
  } else {
    return fn(...args);
  }
};

const press = curry(4, checkPin);
module.exports = { press };
