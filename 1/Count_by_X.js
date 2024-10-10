function countBy(x, n) {
  let z = [];
  let sumNumber = x;
  for (i = 0; i < n; i++) {
    z.push(sumNumber);
    sumNumber = sumNumber + x;
  }
  return z;
}
