import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromNumber } from "../Utiljs";

const NumberButton = ({
  number,
  setOutput,
  output,
  setFirstNumber,
  firstNumber,
}) => {
  return (
    <Button
      variant="primary"
      className={getClassNameFromNumber(number)}
      onClick={() => {
        setOutput(
          output
            ? parseFloat(firstNumber.toString() + number.toString()).toString()
            : parseFloat(output + number.toString()).toString()
        );
        setFirstNumber(
          !firstNumber
            ? parseFloat(firstNumber.toString() + number.toString())
            : parseFloat(output + number.toString())
        );
      }}
    >
      {number}
    </Button>
  );
};
export default NumberButton;
