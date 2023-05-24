import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      <span className="count">{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase{" "}
      </button>
    </div>
  );
};

export default Counter;
