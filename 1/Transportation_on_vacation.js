function rentalCarCost(d) {
  const cost = 40;
  let sumOfRental = cost * d;
  if (d >= 7) {
    return sumOfRental - 50;
  } else if (d < 7 && d >= 3) {
    return sumOfRental - 20;
  } else {
    return sumOfRental;
  }
}
