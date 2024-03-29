const arr = [2, 5, 2, 5, 4, 1, 6, 32, , 2, 5, 4, 2];
const mostFrequentElement = (numbers) => {
  let frequency = {};
  let maxFrequency = 0;
  let mostFrequent = null;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (frequency[currentNumber] == null) {
      frequency[currentNumber] = 1;
    } else {
      frequency[currentNumber]++;
    }

    if (frequency[currentNumber] > maxFrequency) {
      maxFrequency = frequency[currentNumber];
      mostFrequent = currentNumber;
    }
  }

  return mostFrequent;
};
console.log(mostFrequentElement(arr));
