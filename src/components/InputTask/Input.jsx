import React, { useState } from "react";
import './input.css'
const InputForm = () => {
  const [inputs, setInputs] = useState([{ value: "" }]);

  const handleAddInput = () => {
    const newInputs = [...inputs, { value: "" }];
    setInputs(newInputs);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", inputs);
  };

  return (
    <div>
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            <label htmlFor={`input-${index}`}>Input {index + 1}:</label>
            <input
              type="text"
              id={`input-${index}`}
              value={input.value}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddInput}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
