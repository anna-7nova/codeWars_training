function getSum(a, b) {
  if (a == b) {
    return a;
  }
  if (a > b) {
    [a, b] = [b, a];
  }
  let sum = 0;
  for (let number = a; number <= b; number++) {
    sum += number;
  }
  return sum;
}
