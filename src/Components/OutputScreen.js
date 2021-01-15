import React from "react";

const OutPutScreen = ({ firstNumber }) => {
  return <div className="calc-output">{firstNumber || 0}</div>;
};
export default OutPutScreen;
