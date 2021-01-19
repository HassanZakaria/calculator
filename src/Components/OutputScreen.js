import React from "react";

const OutputScreen = ({ firstNumber, output }) => {
  return <div className="calc-output">{output || 0}</div>;
};
export default OutputScreen;
