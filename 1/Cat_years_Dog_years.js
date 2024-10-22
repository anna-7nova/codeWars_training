var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears == 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears == 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears > 2) {
    let years = humanYears - 2;
    catYears = 24 + years * 4;
    dogYears = 24 + years * 5;
  }
  return [humanYears, catYears, dogYears];
};

// or

var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

// or

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

//or

function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15];
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
  }
}
