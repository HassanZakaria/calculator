import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clear from "./Components/Clear";
import Delete from "./Components/Delete";
import Equal from "./Components/Equal";
import Numbers from "./Components/Numbers";
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
  const operations = ["÷", "x", "-", "+"];
  return (
    <div className="app">
      <div className="calculator">
        <OutPutScreen firstNumber={firstNumber} />
        <Clear setFirstNumber={setFirstNumber} />
        <Delete firstNumber={firstNumber} setFirstNumber={setFirstNumber} />
        {operations.map((operation, index) => (
          <OperationButton
            key={index}
            operations={operation}
            handleOperationButtonsClick={handleOperationButtonsClick}
          />
        ))}
        {numbers.map((number, index) => (
          <Numbers
            key={index}
            number={number}
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
          />
        ))}
        <Equal
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
