function romanToInteger(roman) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    let current = romanToInt[roman[i]];
    let next = romanToInt[roman[i + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
