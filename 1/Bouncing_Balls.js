function bouncingBall(h, bounce, window) {
  if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
    let count = 1;
    while (h * bounce > window) {
      count += 2;
      h *= bounce;
    }
    return count;
  }
  return -1;
}
