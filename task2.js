const arr = [12, -14, 16, -15, 7];
const sumPositiveNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
};
console.log(sumPositiveNumbers(arr));
