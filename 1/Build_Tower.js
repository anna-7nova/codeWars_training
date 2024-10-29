function towerBuilder(nFloors) {
  const newArr = [];
  for (let i = 0; i < nFloors; i++) {
    const space = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(2 * i + 1);
    newArr.push(space + stars + space);
  }
  return newArr;
}
//from codewars
/*
function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}
  */