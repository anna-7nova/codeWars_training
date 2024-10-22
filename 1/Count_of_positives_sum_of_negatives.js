function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let numberPlus = 0;
  let numberMinus = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      numberPlus++;
    } else if (input[i] < 0) {
      numberMinus += input[i];
    }
  }
  return [numberPlus, numberMinus];
}
