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
  setOperator,
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
        return output;
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
        setOperator("");
      }}
    >
      =
    </Button>
  );
};
export default EqualButton;
