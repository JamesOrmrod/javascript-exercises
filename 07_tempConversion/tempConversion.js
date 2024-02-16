const convertToCelsius = function(temp) {
  // formula to convert fht to cel: x °F ≘ ((x − 32) × 5 / 9) °C
  let result = (temp - 32) * 5 / 9;
  result = result.toFixed(1);
  return +result;
};

const convertToFahrenheit = function(temp) {
  // formula to convert fht to cel: x °C ≘ (x × 9 / 5 + 32) °F
  let result = temp * 9 / 5 + 32;
  result = result.toFixed(1);
  return +result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
