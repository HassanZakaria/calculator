import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({ setFirstNumber, firstNumber }) => {
  return (
    <Button
      variant="secondary"
      className="calc-btn delete"
      onClick={() => setFirstNumber(firstNumber ? firstNumber.slice(0, -1) : 0)}
    >
      DEL
    </Button>
  );
};
export default DeleteButton;