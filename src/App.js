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

  return (
    <div className="app">
      <div className="calculator">
        <OutPutScreen firstNumber={firstNumber} />
        <Clear />
        <Delete />
        <Divide />
        <Numbers
          number={7}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={8}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={9}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Multiply />
        <Numbers
          number={4}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={5}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={6}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Subtract />
        <Numbers
          number={1}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={2}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Numbers
          number={3}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Add />
        <Numbers
          number={0}
          firstNumber={firstNumber}
          setFirstNumber={setFirstNumber}
        />
        <Equal />
      </div>
    </div>
  );
}

export default App;
