import React from "react";
import { Button } from "react-bootstrap";
import { getClassNameFromOperation } from "../Utiljs";

const OperationButton = ({ handleOperationButtonsClick, operations }) => {
  return (
    <Button
      variant="warning"
      className={getClassNameFromOperation(operations)}
      onClick={() => handleOperationButtonsClick({ operations })}
    >
      {operations}
    </Button>
  );
};
export default OperationButton;
