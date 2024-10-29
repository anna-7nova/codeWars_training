function highAndLow(numbers) {
  const newArr = numbers.split(" ").map(Number);
  return Math.max(...newArr) + " " + Math.min(...newArr);
}
