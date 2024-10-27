function sumDigPow(a, b) {
  const counts = [];
  for (let i = a; i <= b; i++) {
    const newArr = String(i).split("").map(Number);
    let sum = 0;
    for (let n = 0; n < newArr.length; n++) {
      sum += Math.pow(newArr[n], n + 1);
    }
    if (i === sum) {
      counts.push(i);
    }
  }
  return counts;
}
