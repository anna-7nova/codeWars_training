function points (games) {
    let numberOfPoints = 0;
    for ( let i=0; i<games.length; i++) {
      const [x, y] = games[i].split(":").map(Number);
      if (x>y) {
        numberOfPoints += 3;
      } else if (x == y) {
        numberOfPoints += 1;
      } 
    }
    return numberOfPoints;
  }