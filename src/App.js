import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/Add";
import Clear from "./Components/Clear";
import Delete from "./Components/Delete";
import Divide from "./Components/Divide";
import Equal from "./Components/Equal";
import Multiply from "./Components/Multiply";
import Numbers from "./Components/Numbers";
import OutPutScreen from "./Components/OutputScreen";
import Subtract from "./Components/Subtract";
import { useState } from "react";

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
  return (
    <div className="app">
      <div className="calculator">
        <OutPutScreen firstNumber={firstNumber} />
        <Clear setFirstNumber={setFirstNumber} />
        <Delete firstNumber={firstNumber} setFirstNumber={setFirstNumber} />
        <Divide handleOperationButtonsClick={handleOperationButtonsClick} />
        {numbers.map((number) => (
          <Numbers
            number={number}
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
          />
        ))}
        <Multiply handleOperationButtonsClick={handleOperationButtonsClick} />
        <Subtract handleOperationButtonsClick={handleOperationButtonsClick} />
        <Add handleOperationButtonsClick={handleOperationButtonsClick} />
        <Numbers
          number={0}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
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
