function calculator(a, b, operator) {
  let result;
  //   if (calc === "*") {
  //     return result=a * b;
  //   } else if (calc === "/") {
  //     return result=a / b;
  //   } else if (calc === "+") {
  //     return result=a + b;
  //   } else {
  //     return result=a - b;
  //   }

  switch (calc) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return `${calc} is not an operator`;
  }

  return result;
}

module.exports = calculator;
