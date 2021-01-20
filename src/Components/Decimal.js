import React from "react";
import { Button } from "react-bootstrap";

const Decimal = ({ setOutput, output, setFirstNumber }) => {
  return (
    <Button
      variant="primary"
      className="dot"
      onClick={() => {
        setOutput(output.endsWith(".") ? output : output + ".");
        setFirstNumber(output.endsWith(".") ? output : output + ".");
      }}
    >
      .
    </Button>
  );
};
export default Decimal;
