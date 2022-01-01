'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (initial) => ({
  value: initial,
  arr: [initial],
  press(value) {
    this.arr.push(value);
    if (this.arr.length === EXPECTED_PIN.length) return checkPin(...this.arr);
    return this;
  }
});

const add = press('4').press('9').press('6').press('7');
console.log(add);

module.exports = { press };
