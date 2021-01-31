import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromOperation } from "../Utiljs";

const OperationButton = ({ handleOperationButtonsClick, operation }) => {
  return (
    <Button
      variant="warning"
      className={getClassNameFromOperation(operation)}
      onClick={handleOperationButtonsClick}
    >
      {operation}
    </Button>
  );
};
export default OperationButton;
