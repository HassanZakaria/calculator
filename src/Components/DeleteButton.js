import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({ setOutput, output, setSecondNumber, secondNumber }) => {
  function backSpace() {
    if (output) {
      setOutput(output.slice(0, -1));
    } else {
      setSecondNumber(secondNumber.toString().slice(0, -1));
    }
  }
  return (
    <Button variant="secondary" className="calc-btn delete" onClick={backSpace}>
      DEL
    </Button>
  );
};
export default DeleteButton;
