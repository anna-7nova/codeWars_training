function basicOp(operation, value1, value2){
    let result;
    if (operation == "+" ) {
      return result = value1 + value2;
    } else if (operation == "-") {
      return result = value1 - value2;
    } else if (operation == "*") {
      return result = value1 * value2;
    } else if (operation == "/") {
      return result = value1 / value2;
    } else {
      return 0
    }
  }