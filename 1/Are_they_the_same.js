function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  const newArr = array1.map((item) => item ** 2);
  newArr.sort((x, y) => x - y);
  array2.sort((x, y) => x - y);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
