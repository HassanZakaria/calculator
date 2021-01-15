import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromNumber } from "../Utiljs";

const Numbers = ({ number, setFirstNumber, firstNumber }) => {
  return (
    <Button
      variant="primary"
      className={getClassNameFromNumber(number)}
      onClick={() => setFirstNumber([firstNumber + number])}
    >
      {number}
    </Button>
  );
};
export default Numbers;
