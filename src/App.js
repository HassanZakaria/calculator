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

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <OutPutScreen />
        <Clear />
        <Delete />
        <Divide />
        <Numbers number={7} />
        <Numbers number={8} />
        <Numbers number={9} />
        <Multiply />
        <Numbers number={4} />
        <Numbers number={5} />
        <Numbers number={6} />
        <Subtract />
        <Numbers number={1} />
        <Numbers number={2} />
        <Numbers number={3} />
        <Add />
        <Numbers number={0} />
        <Equal />
      </div>
    </div>
  );
}

export default App;
