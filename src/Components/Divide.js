import React from "react";
import { Button } from "react-bootstrap";

const Divide = ({ handleOperationButtonsClick }) => {
  return (
    <Button
      variant="warning"
      className="calc-btn divide"
      onClick={() => handleOperationButtonsClick("/")}
    >
      &divide;
    </Button>
  );
};
export default Divide;
