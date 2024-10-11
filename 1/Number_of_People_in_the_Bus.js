var number = function (busStops) {
  let passangers = 0;
  for (let i = 0; i < busStops.length; i++) {
    passangers = passangers + busStops[i][0] - busStops[i][1];
  }
  return passangers;
};
