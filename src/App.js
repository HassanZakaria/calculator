import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClearButton from "./Components/ClearButton";
import DeleteButton from "./Components/DeleteButton";
import EqualButton from "./Components/EqualButton";
import NumberButton from "./Components/NumberButton";
import OutputScreen from "./Components/OutputScreen";
import { useState } from "react";
import OperationButton from "./Components/OperationButton";
import Decimal from "./Components/Decimal";
import { performOperation } from "./Utiljs";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);
  const [output, setOutput] = useState("");

  const handleOperationButtonsClick = (operation) => {
    const operationResult = performOperation(
      operator,
      firstNumber,
      secondNumber
    );
    if (operator) {
      setOutput(operationResult());
      setFirstNumber(operationResult());
      setSecondNumber(0);
      setOperator(operation);
    } else {
      setFirstNumber(output);
      setOperator(operation);
      setOutput("");
    }
  };

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["÷", "x", "-", "+"];

  return (
    <div className="app">
      <div className="calculator">
        <OutputScreen
          output={output}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
        />
        <ClearButton
          setOutput={setOutput}
          setSecondNumber={setSecondNumber}
          setFirstNumber={setFirstNumber}
          setOperator={setOperator}
        />
        <DeleteButton
          output={output}
          setOutput={setOutput}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
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
            setOutput={setOutput}
            output={output}
            setSecondNumber={setSecondNumber}
            firstNumber={firstNumber}
            secondNumber={secondNumber}
          />
        ))}
        <Decimal
          setOutput={setOutput}
          output={output}
          setSecondNumber={setSecondNumber}
          secondNumber={secondNumber}
        />
        <EqualButton
          firstNumber={firstNumber}
          setOutput={setOutput}
          operator={operator}
          secondNumber={secondNumber}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
          output={output}
          setOperator={setOperator}
        />
      </div>
    </div>
  );
}

export default App;
