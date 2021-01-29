import React from "react";

const OutputScreen = ({ output, firstNumber, secondNumber }) => {
  function display() {
    if (output) {
      return output;
    } else if (!output && firstNumber) {
      return secondNumber || 0;
    } else {
      return firstNumber;
    }
  }
  return <div className="calc-output">{display()}</div>;
};
export default OutputScreen;
