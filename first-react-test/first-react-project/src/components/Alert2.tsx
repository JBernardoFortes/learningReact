import { useState } from "react";
import Button from "./Button.tsx";

interface Props {
  show: Boolean;
  text: String;
}
const Alert2 = (props: Props) => {
  let [alertVisibility, setAlertVisibility] = useState(false);
  const onClick = () => {
    setAlertVisibility(!alertVisibility);
  };
  if (props.show) {
    return (
      <div className="alert alert-info">
        {props.text}
        <Button text="close" onClick={onClick}></Button>
      </div>
    );
  } else {
    return null;
  }
};

export default Alert2;
