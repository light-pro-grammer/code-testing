function validateNumbers(arg1, arg2) {
  if (typeof arg1 === 'number' && !isNaN(arg1) && typeof arg2 === 'number' && !isNaN(arg2)) {
    return true;
  } else {
    return false;
  }
}

// CALCULATOR

function add(x, y) {
  if (validateNumbers(x, y)) {
    return `Сума: ${x + y}`;
  }
}

function subtract(x, y) {
  if (validateNumbers(x, y)) {
    return `Різниця: ${x - y}`;
  }
}

function multiply(x, y) {
  if (validateNumbers(x, y)) {
    return `Добуток: ${x * y}`;
  }
}

function divide(x, y) {
  if (validateNumbers(x, y)) {
    if (y === 0) {
      return 'Ділення на нуль неможливе';
    }
    return `Частка: ${x / y}`;
  }
}

// =======================================
//MIN & MAX (using for loop)
const numbers = [4, 8, 15, 16, 23, 42, 1, 99, 7, 11];

function findMinMax(numbers) {
  let min;
  let max;

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (typeof current === 'number') {
      if (min === undefined || current < min) {
        min = current;
      }
      if (max === undefined || current > max) {
        max = current;
      }
    }
  }

  return { min, max };
}

// =======================================
//SUMMING AN ARRAY (using for loop)
function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  }

  return sum;
}

// =======================================

function Accumulator(startingValue) {
  this.value = startingValue;

  this.increment = function () {
    this.value++;
  };

  this.decrement = function () {
    this.value--;
  };
}

const accumulator = new Accumulator(5);

//===================================
function CancelableAccumulator(startingValue) {
  Accumulator.call(this, startingValue);

  this.clear = function () {
    this.value = startingValue;
  };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

const cancelableAccumulator = new CancelableAccumulator(20);

// //=======================================
//PYRAMID
function createPyramid(rows) {
  const output = [];

  for (let i = 1; i <= rows; i++) {
    let row = '';

    for (let j = 0; j < i; j++) {
      row += '#';
    }

    output.push(row);
  }

  return output;
}

// ======================================================

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

let user = {
  name: 'Іван',
  age: 25,
  sayHello: function () {
    return 'Привіт, я ' + this.name + ', мені ' + this.age + ' років';
  },
};
