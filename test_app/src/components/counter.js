import React, { useReducer, useState } from "react";
import { reducer } from "../reducerAndAction/reducer";
import { ACTIONS } from "../reducerAndAction/action";

const Counter = () => {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="card">
      <input
        type="text"
        placeholder="ENTER YOUR TEXT"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <h1>{inputText}</h1>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch(ACTIONS.INCREMENT)}>INCREMENT</button>
      <button onClick={() => dispatch(ACTIONS.DECREMENT)}>DECREMENT</button>
      <button onClick={() => dispatch(ACTIONS.RESET)}>RESET</button>
    </div>
  );
};

export default Counter;
