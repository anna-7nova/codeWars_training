function sumArray(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  let indexMin = array.indexOf(Math.min(...array));
  let indexMax = array.indexOf(Math.max(...array));
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - array[indexMin] - array[indexMax];
}
