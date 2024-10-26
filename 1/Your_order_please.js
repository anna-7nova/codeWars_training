function order(words) {
    if (words.length === 0) {
      return "";
    }
    const newArr = words.split(" ");
  const order = newArr.sort( (a, b) => {
      const numOne = parseInt(a.match(/\d/), 10);
      const numLast = parseInt(b.match(/\d/), 10);
      return numOne - numLast;
  });
  return order.join(" ");
  }

  // from codewars
  /*function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  } */

  