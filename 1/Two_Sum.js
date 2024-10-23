function twoSum(numbers, target) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = target - numbers[i];
    for (let n = i + 1; n < numbers.length; n++) {
      if (numbers[n] === number) {
        return [i, n];
      }
    }
  }
  return newArr;
}
