function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}
// or from codewars
/*function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }*/