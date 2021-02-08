const max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((number) => {
    if (number > result) {
      result = number;
    }
  });
  return result;
};

const min = (numbers) => {
  let result = numbers[0];
  numbers.forEach((number) => {
    if (number < result) {
      result = number;
    }
  });
  return result;
};

const avg = (numbers) => {
  let total = 0;
  numbers.forEach((n) => {
    total += n;
  });
  return total / numbers.length;
};

exports.min = min;
exports.max = max;
exports.avg = avg;
