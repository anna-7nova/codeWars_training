var min = function (list) {
  let result = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < result) {
      result = list[i];
    }
  }
  return result;
};

var max = function (list) {
  let result = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > result) {
      result = list[i];
    }
  }
  return result;
};
