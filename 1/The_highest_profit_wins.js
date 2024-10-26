function minMax(arr) {
  let maxCount = Math.max(...arr);
  let minCount = Math.min(...arr);
  return [minCount, maxCount];
}
// from codewars

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
