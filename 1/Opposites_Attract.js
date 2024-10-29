function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// or from codewars
/*function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }*/