import React, { useContext, useEffect, useRef, useState } from "react";
import { apple } from "../util/context";

function ContactUs() {
  const { dataName, changeData } = useContext(apple);

  const refVal = useRef(null);
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

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
    </div>
  );
}

export default ContactUs;
