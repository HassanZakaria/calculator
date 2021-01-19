import React from "react";

const OutputScreen = ({ output, secondNumber }) => {
  return (
    <div className="calc-output">
      {output ? output || 0 : secondNumber || 0}
    </div>
  );
};
export default OutputScreen;
