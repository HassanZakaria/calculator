import React from "react";
import { Button } from "react-bootstrap";

const ClearButton = ({ setOutput }) => {
  return (
    <Button
      variant="danger"
      className="calc-btn clear"
      onClick={() => setOutput(0)}
    >
      AC
    </Button>
  );
};
export default ClearButton;
