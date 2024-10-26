function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return a + b > c && a + c > b && b + c > a;
  }
  return false;
}
//from codewars

function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}
