function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  let count = 0;
  let newArrayCount = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let minIndex = newArrayCount.indexOf(Math.min(...newArrayCount));
    newArrayCount[minIndex] += customers[i];
  }
  return count = Math.max(...newArrayCount)
}

//another solution from site

function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
