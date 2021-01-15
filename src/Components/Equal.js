import React from "react";
import Button from "react-bootstrap/Button";

const Equal = ({ setFirstNumber, firstNumber, operator, secondNumber }) => {
  function chooseOperator(operator) {
    switch (operator) {
      case "+":
        return parseInt(firstNumber) + parseInt(secondNumber);
      case "-":
        return parseInt(secondNumber) - parseInt(firstNumber);
      case "*":
        return parseInt(firstNumber) * parseInt(secondNumber);
      case "/":
        return parseInt(secondNumber) / parseInt(firstNumber);
      default:
        console.error("no operator clicked!");
    }
  }
  return (
    <Button
      variant="warning"
      className="calc-btn equal"
      onClick={() => setFirstNumber(chooseOperator(operator))}
    >
      =
    </Button>
  );
};
export default Equal;
