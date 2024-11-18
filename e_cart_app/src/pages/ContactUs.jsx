import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { context } from "../util/context";
import Child from "../component/Child";

function ContactUs() {
  const { dataName, changeData } = useContext(context);

  const refVal = useRef(null);
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const [value, setValue] = useState(0);

  const handleClick = useCallback(() => {
    setValue((previousCount) => previousCount + 1);
  }, []);

  return (
    <div>
      <label>This is to update the context value</label>
      <input
        type="text"
        value={dataName}
        className="p-2 m-2 border"
        onChange={(e) => changeData(e.target.value)}
      />
      <div>
        <p className="m-2 text-lg">useState count:{count}</p>
        <p className="m-2 text-lg">previous count:{prevCount.current}</p>
        <button
          className="p-2 m-2 bg-lime-400 text-zinc-100"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click to update the count
        </button>
      </div>
      <div>
        <input ref={refVal} placeholder="ref input type" type="text" />
        <button
          className="m-2 p-2 bg-amber-300 text-slate-100 rounded-lg"
          onClick={(e) => {
            refVal.current.focus();
          }}
        >
          Click me to focus
        </button>
      </div>
      <div className="w-[40%] m-auto">
      <h1>useCallback and useMemo demo</h1>
      <p>{value}</p>
      <button
        className="p-2 rounded-lg bg-zinc-900 text-slate-300"
        onClick={handleClick}
      >
        click from parent component
      </button>
      <Child onclick={handleClick} />
    </div>
    </div>
  );
}

export default ContactUs;
