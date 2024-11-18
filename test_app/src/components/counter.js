import React, { useReducer, useState } from "react";
import { reducer } from "../reducerAndAction/reducer";
import { ACTIONS } from "../reducerAndAction/action";

const Counter = () => {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="test">
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <h1>{inputText}</h1>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch(ACTIONS.INCREMENT)}>Increment</button>
      <button onClick={() => dispatch(ACTIONS.DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(ACTIONS.RESET)}>Reset</button>
    </div>
  );
};

export default Counter;
