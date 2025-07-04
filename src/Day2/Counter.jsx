import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h2> Counter</h2>
      <div className="counter-section">
        <div className="icon" onClick={() => setCount((count) => count - 1)}>
          -
        </div>
        <div className="number">{count}</div>
        <div className="icon" onClick={() => setCount((count) => count + 1)}>
          +
        </div>
      </div>
      <div className="reset" onClick={() => setCount(0)}>
        Reset
      </div>
    </div>
  );
};

export default Counter;
