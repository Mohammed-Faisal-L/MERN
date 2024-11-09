import React from "react";

function Buttons({ flag, setFlag }) {
  const buttonStyle = "text-white font-bold py-2 px-4 rounded";

  return (
    <div className="flex justify-center">
      <button
        className={`${
          flag
            ? "bg-gray-800 hover:bg-gray-900"
            : "bg-blue-500 hover:bg-blue-700"
        } ${buttonStyle}`}
        onClick={() => setFlag(!flag)}
      >
        {flag ? "Night Mode" : "Day Mode"}
      </button>
    </div>
  );
}

export default Buttons;
