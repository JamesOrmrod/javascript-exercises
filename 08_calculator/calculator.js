const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numArr) {
	return numArr.reduce((total, num) => total + num, 0);
};

const multiply = function(numArr) {
	return numArr.reduce((total, num) => total * num, 1);
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(factor) {
  let result = 1;
  for (let i = 1; i <= factor; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
