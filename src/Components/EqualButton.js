import React from "react";
import Button from "react-bootstrap/Button";
import { chooseOperator } from "../Utiljs";

const EqualButton = ({
  setOutput,
  firstNumber,
  operator,
  secondNumber,
  setFirstNumber,
  setSecondNumber,
  setOperator,
}) => {
  return (
    <Button
      variant="warning"
      className="equal"
      onClick={() => {
        setOutput(
          chooseOperator(operator, firstNumber, secondNumber).toString()
        );
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
