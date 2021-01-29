import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromNumber } from "../Utiljs";

const NumberButton = ({
  number,
  setOutput,
  output,
  setSecondNumber,
  firstNumber,
  secondNumber,
}) => {
  return (
    <Button
      variant="primary"
      className={getClassNameFromNumber(number)}
      onClick={() => {
        setOutput(firstNumber ? "" : parseFloat(output + number).toString());
        setSecondNumber(
          !firstNumber ? 0 : parseFloat(secondNumber + number).toString()
        );
      }}
    >
      {number}
    </Button>
  );
};
export default NumberButton;
