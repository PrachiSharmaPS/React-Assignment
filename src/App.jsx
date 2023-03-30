import { useState } from "react";
import "./App.css";

function App() {
  const [valOne, setValOne] = useState("");
  const [valSecond, setValSecond] = useState("");
  const [result, setResult] = useState("");

  const handleValOneChange = (event) => {
    setValOne(event.target.value);
  };

  const handleValSecondChange = (event) => {
    setValSecond(event.target.value);
  };
 
  const handleAddition = () => {
    setResult(Number(valOne) + Number(valSecond));
  };

  const handleSubtraction = () => {
    setResult(Number(valOne) - Number(valSecond));

  };

  const handleMultiplication = () => {
    setResult(Number(valOne) * Number(valSecond));

  };
  const handleReset = () => {
    setResult("");
    setValOne("")
    setValSecond("")
  };
  const handleDivision = () => {
    setResult(Number(valOne) / Number(valSecond));

  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <hr />
      <div className="valueOne-input">
        <label>Value One</label>
        <input type="number" value={valOne} onChange={handleValOneChange} required/>
      </div>
      <div className="valueSecond-input">
      <label>Value Second</label>
        <input type="number" value={valSecond} onChange={handleValSecondChange} required />
      </div>
     
        <button onClick={handleAddition} className="button" type="submit">Addition</button>
        <button onClick={handleSubtraction} className="button" type="submit">Subtraction</button>
        <button onClick={handleMultiplication} className="button" type="submit">Multiplication</button>
        <button onClick={handleDivision} className="button" type="submit">Division</button>
        <button onClick={handleReset} className="button" type="submit">Reset</button>
      <hr/>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
