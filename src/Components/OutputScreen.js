import React from "react";

const OutputScreen = ({ output, firstNumber, secondNumber }) => {
  function display() {
    if (output) {
      return output;
    } else if (!output && firstNumber) {
      return secondNumber;
    } else {
      return firstNumber;
    }
  }
  return <div className="calc-output">{display() || 0}</div>;
};
export default OutputScreen;
