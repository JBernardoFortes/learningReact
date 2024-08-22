import { useState } from "react";
import Button from "./Button.tsx";

export const RandomNumber = () => {
  let [counterState, setCounterState] = useState(0);

  //   const addCounter = (c: number) => {
  //     setCounterState(c + 1);
  //   };
  const randomNumber = () => {
    setCounterState(Number((Math.random() * 100).toFixed()) % 20);
  };

  return (
    <div className="randomNumber">
      <Button
        onClick={randomNumber}
        counter={counterState}
        text="Random Number"
      ></Button>
      <h2>{counterState}</h2>
    </div>
  );
};
export default RandomNumber;
