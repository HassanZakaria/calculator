import React from "react";
import { Button } from "react-bootstrap";

const ClearButton = ({
  setOutput,
  setFirstNumber,
  setSecondNumber,
  setOperator,
}) => {
  function clear() {
    setOutput("");
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator("");
  }
  return (
    <Button variant="danger" className="calc-btn clear" onClick={() => clear()}>
      AC
    </Button>
  );
};
export default ClearButton;
