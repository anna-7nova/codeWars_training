function greet(name, owner) {
  let greeting;
  if (name === owner) {
    greeting = "Hello boss";
  } else {
    greeting = "Hello guest";
  }
  return greeting;
}
