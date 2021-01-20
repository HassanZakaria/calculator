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
            ? parseFloat(output + number).toString()
            : parseFloat(output + number).toString()
        );
        setFirstNumber(
          !firstNumber
            ? parseFloat(output + number).toString()
            : parseFloat(output + number).toString()
        );
      }}
    >
      {number}
    </Button>
  );
};
export default NumberButton;
