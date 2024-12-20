function betterThanAverage(classPoints, yourPoints) {
    let mediumResult = 0;
    let result = 0;
    const studentNumber = classPoints.length + 1;
    
    for (let i = 0; i<classPoints.length; i++) {
      result += classPoints[i];
    }
    mediumResult = (result + yourPoints)/studentNumber;
    if (mediumResult >= yourPoints) {
      return false;
    } else {
      return true;
    }
  }
  