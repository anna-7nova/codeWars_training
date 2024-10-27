function findUniq(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const num in counts) {
    if (counts[num] === 1) {
      return Number(num);
    }
  }
}
