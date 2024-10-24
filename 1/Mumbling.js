function accum(s) {
  let newString = [];
  for (let i = 0; i < s.length; i++) {
    let newLetters = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    newString.push(newLetters);
  }
  return newString.join("-");
}
