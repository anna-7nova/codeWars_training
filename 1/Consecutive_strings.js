function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length || strarr.length == 0) {
    return "";
  }

  let longestWord = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let word = "";
    for (let w = 0; w < k; w++) {
      word += strarr[i + w];
    }
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

//or from codewars

function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
