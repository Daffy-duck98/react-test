import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+count</button>
      <button onClick={decrement}>-count</button>
    </div>
  );
}

export default Counter;
