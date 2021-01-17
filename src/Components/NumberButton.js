import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromNumber } from "../Utiljs";

const NumberButton = ({ number, setFirstNumber, firstNumber }) => {
  return (
    <Button
      variant="primary"
      className={getClassNameFromNumber(number)}
      onClick={() =>
        setFirstNumber(
          number === 0 && firstNumber === 0
            ? 0
            : (firstNumber + number).toString()
        )
      }
    >
      {number}
    </Button>
  );
};
export default NumberButton;
