import React, { useCallback, useState } from "react";
import Child from "../component/Child";

function Cart() {
  const [value, setValue] = useState(0);

  const handleClick = useCallback(() => {
    setValue((previousCount) => previousCount + 1);
  }, []);

  return (
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
  );
}

export default Cart;
