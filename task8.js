const arr = [2, 1, 4, 5, 8, 6, 3, 22, 15];
function secondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmallest = smallest;
      smallest = numbers[i];
    } else if (numbers[i] < secondSmallest && numbers[i] != smallest) {
      secondSmallest = numbers[i];
    }
  }

  return secondSmallest;
}
console.log(secondSmallest(arr));
