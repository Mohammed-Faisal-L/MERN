import React, { useState } from "react";

function Counter() {
  const [counter, setCounting] = useState(0);

  return (
    <div>
      <h1 className="aqua">Counter</h1>
      <div className="buttons">
        <button
          onClick={() => {
            setCounting((count) => count + 1); // Set the updated count
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            setCounting((count) => count - 1); // Set the updated count
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
      <h1>{counter}</h1>
    </div>
  );
}

export default Counter;
