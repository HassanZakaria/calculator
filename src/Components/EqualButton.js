import React from "react";
import Button from "react-bootstrap/Button";

const EqualButton = ({
  setOutput,
  firstNumber,
  operator,
  secondNumber,
  setFirstNumber,
  setSecondNumber,
  output,
}) => {
  function chooseOperator(operator) {
    switch (operator) {
      case "+":
        return parseFloat(firstNumber) + parseFloat(secondNumber);
      case "-":
        return parseFloat(secondNumber) - parseFloat(firstNumber);
      case "x":
        return parseFloat(firstNumber) * parseFloat(secondNumber);
      case "÷":
        return parseFloat(secondNumber) / parseFloat(firstNumber);
      default:
        console.error("no operator clicked!");
    }
  }
  return (
    <Button
      variant="warning"
      className="equal"
      onClick={() => {
        setOutput(chooseOperator(operator).toString());
        setSecondNumber(0);
        setFirstNumber(0);
      }}
    >
      =
    </Button>
  );
};
export default EqualButton;
