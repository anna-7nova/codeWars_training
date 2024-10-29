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
}
  // or from codewars
 /* function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}*/