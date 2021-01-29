import React from "react";
import { Button } from "react-bootstrap";

const Decimal = ({ setOutput, output, setSecondNumber, secondNumber }) => {
  function decimal() {
    if (!secondNumber) {
      setOutput(output.endsWith(".") ? output : output + ".");
    } else {
      setSecondNumber(
        secondNumber.toString().endsWith(".")
          ? secondNumber
          : secondNumber + "."
      );
    }
  }
  return (
    <Button variant="primary" className="dot" onClick={() => decimal()}>
      .
    </Button>
  );
};
export default Decimal;
