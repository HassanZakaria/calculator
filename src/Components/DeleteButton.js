import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({ setOutput, output, setSecondNumber, secondNumber }) => {
  function backSpace() {
    if (output) {
      return setOutput(output.slice(0, -1));
    } else {
      return setSecondNumber(secondNumber.toString().slice(0, -1));
    }
  }
  return (
    <Button
      variant="secondary"
      className="calc-btn delete"
      onClick={() => backSpace() || 0}
    >
      DEL
    </Button>
  );
};
export default DeleteButton;
