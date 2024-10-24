function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count / array.length;
}
