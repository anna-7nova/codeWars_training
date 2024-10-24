function twiceAsOld(dadYearsOld, sonYearsOld) {
  let newAge = sonYearsOld * 2;
  if (newAge == dadYearsOld) {
    return 0;
  } else {
    return Math.abs(newAge - dadYearsOld);
  }
}
