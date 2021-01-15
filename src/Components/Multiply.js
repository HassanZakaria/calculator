import React from "react";
import { Button } from "react-bootstrap";

const Multiply = ({ handleOperationButtonsClick }) => {
  return (
    <Button
      variant="warning"
      className="calc-btn multiply"
      onClick={() => handleOperationButtonsClick("*")}
    >
      &times;
    </Button>
  );
};
export default Multiply;
