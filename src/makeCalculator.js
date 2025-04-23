'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const calculator = {
    result: 0,
    operate(callback, a) {
      callback.call(this, a);

      return this;
    },

    add(number) {
      this.result += number;

      return this;
    },
    subtract(number) {
      this.result -= number;

      return this;
    },
    multiply(number) {
      this.result *= number;

      return this;
    },
    divide(number) {
      this.result /= number;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;

/* const calculator = {
    result: 0,
    operate(operation, value) {
      return operation(value);
    },
    reset() {
      this.result = 0;

      return this.result;
    },

    add: (value) => {
      this.result += value;
    },

    substract: (value) => {
      this.result -= value;
    },

    multiply: (value) => {
      this.result *= value;
    },

    divide: (value) => {
      this.result /= value;
    },
  };

  return calculator;
} */
