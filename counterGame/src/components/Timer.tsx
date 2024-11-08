import { useEffect, useState } from "react";

interface Props {
  handleLock: (bool: boolean) => void;
  handleOn: (bool: boolean) => void;
  on: boolean;
  setCount: (number: number) => void;
}

const Timer = ({ handleLock, handleOn, on, setCount }: Props) => {
  let [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (on != false) {
      setCount(0);
    }
    setSeconds(10);
    if (on == true) {
      // inicia o timer em 10 segundos
      handleLock(false);
      const timer = setInterval(() => {
        if (seconds <= 0) {
          // console.log(seconds);
          handleOn(false);
          handleLock(true);
          // console.log(on);
          clearInterval(timer);
        } else {
          // console.log(seconds);
          setSeconds(seconds--);
        }
      }, 1000);
    }
    //setSeconds(0);
  }, [on]);

  return (
    <div>
      <h2 className="timer">
        <span>Timer : {seconds}</span>
      </h2>
    </div>
  );
};

export default Timer;
