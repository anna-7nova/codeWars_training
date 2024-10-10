function litres(time) {
  let valueOfWater;
  if (time < 2) {
    return 0;
  } else {
    valueOfWater = Math.floor(time * 0.5);
    return valueOfWater;
  }
}
