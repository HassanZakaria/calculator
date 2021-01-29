export function getClassNameFromNumber(num) {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 0:
      return "zero";
    default:
      console.error("error occurred! Unknown number");
  }
}

export function getClassNameFromOperation(operation) {
  switch (operation) {
    case "+":
      return "add";
    case "-":
      return "subtract";
    case "x":
      return "multiply";
    case "÷":
      return "divide";
    default:
      console.error("error occured! Unknown operator");
  }
}
export function performOperation(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return parseFloat(firstNumber) + parseFloat(secondNumber);
    case "-":
      return parseFloat(firstNumber) - parseFloat(secondNumber);
    case "x":
      return parseFloat(firstNumber) * parseFloat(secondNumber);
    case "÷":
      return parseFloat(firstNumber) / parseFloat(secondNumber);
    default:
      return console.error("error");
  }
}
