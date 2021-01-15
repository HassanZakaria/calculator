import React from "react";
import { Button } from "react-bootstrap";

const Clear = ({ setFirstNumber }) => {
  return (
    <Button
      variant="danger"
      className="calc-btn clear"
      onClick={() => setFirstNumber(0)}
    >
      AC
    </Button>
  );
};
export default Clear;
