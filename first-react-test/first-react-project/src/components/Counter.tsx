import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1> {counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter(++counter);
        }}
      >
        Increment Counter
      </button>
    </div>
  );
};

export default Counter;
