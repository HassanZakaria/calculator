import React from "react";

const OutputScreen = ({ output, firstNumber, secondNumber }) => {
  return (
    <div className="calc-output">
      {output ? output || 0 : secondNumber || firstNumber || 0}
    </div>
  );
};
export default OutputScreen;
