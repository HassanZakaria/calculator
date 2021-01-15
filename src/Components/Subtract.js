import Button from "react-bootstrap/Button";
import React from "react";

const Subtract = ({ handleOperationButtonsClick }) => {
  return (
    <Button
      variant="warning"
      className="calc-btn subtract"
      onClick={() => handleOperationButtonsClick("-")}
    >
      -
    </Button>
  );
};
export default Subtract;
