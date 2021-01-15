import React from "react";
import Button from "react-bootstrap/Button";

const EqualButton = ({
  setFirstNumber,
  firstNumber,
  operator,
  secondNumber,
}) => {
  function chooseOperator(operator) {
    switch (operator) {
      case "+":
        return parseFloat(firstNumber) + parseFloat(secondNumber);
      case "-":
        return parseFloat(secondNumber) - parseFloat(firstNumber);
      case "*":
        return parseFloat(firstNumber) * parseFloat(secondNumber);
      case "/":
        return parseFloat(secondNumber) / parseFloat(firstNumber);
      default:
        console.error("no operator clicked!");
    }
  }
  return (
    <Button
      variant="warning"
      className="equal"
      onClick={() => setFirstNumber(chooseOperator(operator))}
    >
      =
    </Button>
  );
};
export default EqualButton;
