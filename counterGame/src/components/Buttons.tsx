import { useEffect, useRef } from "react";

interface Props {
  lock: boolean;
  setCount: (n: number) => void;
  count: number;
}
const Buttons = ({ lock, setCount, count }: Props) => {
  const addButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const addButton = addButtonRef.current;
    if (lock == true) {
      addButton?.classList.add("desactive");
    } else {
      addButton?.classList.remove("desactive");
    }
  }, [lock]);

  return (
    <div className="buttonWrapper">
      <button
        ref={addButtonRef}
        className="button"
        onClick={() => {
          if (lock == false) {
            setCount(++count);
          }
        }}
      >
        {" "}
        Add{" "}
      </button>
    </div>
  );
};

export default Buttons;
