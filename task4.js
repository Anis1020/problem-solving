const numbers = [1, 2, 3, 4, 5];
const target = 7;

function findTwoNumbers(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum == target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const result = findTwoNumbers(numbers, target);
console.log(result);
