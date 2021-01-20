import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({ setOutput, output }) => {
  return (
    <Button
      variant="secondary"
      className="calc-btn delete"
      onClick={() => setOutput(output ? output.slice(0, -1) : 0)}
    >
      DEL
    </Button>
  );
};
export default DeleteButton;
