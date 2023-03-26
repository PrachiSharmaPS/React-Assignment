import React, { useState } from "react";
import './button.css'
const ButtonTable = () => {
  const [buttonData, setButtonData] = useState([]);

  const handleClick = (buttonName) => {
    const now = new Date();
    const newButtonData = [...buttonData, { buttonName, time: now.toString() }];
    setButtonData(newButtonData);
  };

  return (
    <div>
      <h1>Button Clicks</h1>
      <div>
        <button onClick={() => handleClick("ButtonA")}>ButtonA</button>
        <button onClick={() => handleClick("ButtonB")}>ButtonB</button>
        <button onClick={() => handleClick("ButtonC")}>ButtonC</button>
        <button onClick={() => handleClick("ButtonD")}>ButtonD</button>
      </div>
      {buttonData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Button Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {buttonData.map((data, index) => (
              <tr key={index}>
                <td>{data.buttonName}</td>
                <td>{data.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ButtonTable;
