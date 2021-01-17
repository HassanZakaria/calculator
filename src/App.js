import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClearButton from "./Components/ClearButton";
import DeleteButton from "./Components/DeleteButton";
import EqualButton from "./Components/EqualButton";
import NumberButton from "./Components/NumberButton";
import OutPutScreen from "./Components/OutputScreen";
import { useState } from "react";
import OperationButton from "./Components/OperationButton";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);

  const handleOperationButtonsClick = (operation) => {
    setSecondNumber(firstNumber);
    setOperator(operation);
    setFirstNumber(0);
  };
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["÷", "x", "-", "+"];

  return (
    <div className="app">
      <div className="calculator">
        <OutPutScreen firstNumber={firstNumber} />
        <ClearButton setFirstNumber={setFirstNumber} />
        <DeleteButton
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        {operators.map((operator, index) => (
          <OperationButton
            key={index}
            operations={operator}
            handleOperationButtonsClick={handleOperationButtonsClick}
          />
        ))}
        {numbers.map((number, index) => (
          <NumberButton
            key={index}
            number={number}
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
          />
        ))}
        <EqualButton
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
          operator={operator}
          secondNumber={secondNumber}
        />
      </div>
    </div>
  );
}

export default App;
