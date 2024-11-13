import React, { memo } from "react";

const Child = memo(({ onclick }) => {
  return (
    <div>
      <button
        className="p-2 m-3 bg-cyan-600 text-neutral-100 rounded-lg"
        onClick={onclick}
      >
        button from child component
      </button>
    </div>
  );
});

export default Child;
