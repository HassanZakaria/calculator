import React from "react";
import { Button } from "react-bootstrap";

const ClearButton = ({ init }) => {
  return (
    <Button variant="danger" className="calc-btn clear" onClick={init}>
      AC
    </Button>
  );
};
export default ClearButton;
