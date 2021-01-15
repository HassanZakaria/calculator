import Button from "react-bootstrap/Button";
import React from "react";

const Add = ({ handleOperationButtonsClick }) => {
  return (
    <Button
      variant="warning"
      className="calc-btn add"
      onClick={() => handleOperationButtonsClick("+")}
    >
      +
    </Button>
  );
};
export default Add;
