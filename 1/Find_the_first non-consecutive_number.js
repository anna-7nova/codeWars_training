function firstNonConsecutive(arr) {
  if (arr.length === 0) {
    return null;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}
