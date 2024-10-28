var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
};
// from codewars

/*function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }*/