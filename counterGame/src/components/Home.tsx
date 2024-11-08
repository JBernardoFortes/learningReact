import Counter from "./Counter.tsx";
import Timer from "./Timer.tsx";
import Buttons from "./Buttons.tsx";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const [lock, setLock] = useState(true);
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(0);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const handleLock = (bool: boolean) => {
    setLock(bool);
  };
  const handleOn = (bool: boolean) => {
    setOn(bool);
  };
  useEffect(() => {
    const startButton = startButtonRef.current;
    if (on == true) {
      startButton?.classList.add("desactive");
    } else {
      startButton?.classList.remove("desactive");
    }
  }, [on]);

  return (
    <div className="home">
      <div className="buttonWrapper">
        <button
          onClick={() => {
            handleOn(true);
          }}
          className="button"
          id="startButton"
          ref={startButtonRef}
        >
          {" "}
          Start{" "}
        </button>
      </div>
      <Timer
        handleLock={handleLock}
        handleOn={handleOn}
        on={on}
        setCount={setCount}
      />
      <Counter count={count} />
      <Buttons lock={lock} setCount={setCount} count={count} />
    </div>
  );
};
