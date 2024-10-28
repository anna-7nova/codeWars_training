function duplicateEncode(word) {
  const newArr = word.toLowerCase().split(""); 
  let result = ""; 

  for (let i = 0; i < newArr.length; i++) {
      const occurrences = newArr.filter(item => item === newArr[i]).length;
      if (occurrences === 1) {
          result += "("; 
      } else {
          result += ")"; 
      }
  }
  return result;