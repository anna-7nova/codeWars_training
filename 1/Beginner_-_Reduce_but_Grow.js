function grow(x) {
  let sum = 1;
  for (i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      sum = sum * x[i];
    }
  }
  return sum;
}
