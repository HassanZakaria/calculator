import React from "react";
import { Button } from "react-bootstrap";

const Numbers = ({ number }) => {
  return (
    <Button variant="primary" className="calc-btn">
      {number}
    </Button>
  );
};
export default Numbers;
