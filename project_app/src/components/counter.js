import React, { useState } from "react";

function Counter() {
  const [counter, setCounting] = useState(0);

  return (
    <div>
      <h1 className="aqua">Counter App</h1>
      <div className="buttons">
        <button
          onClick={() => {
            const newCount = counter + 1; // Calculate the new count
            setCounting(newCount); // Set the updated count
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            const newCount = counter - 1; // Calculate the new count
            setCounting(newCount); // Set the updated count
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            setCounting(0);
          }}
        >
          Reset
        </button>
      </div>
      <h1>{counter}</h1> <hr />
    </div>
  );
}

export default Counter;
