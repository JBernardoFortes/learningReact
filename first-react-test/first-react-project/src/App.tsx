// import Message from "./Message.tsx";
import { useState } from "react";
import Alert2 from "./components/Alert2.tsx";
import Button from "./components/Button.tsx";
import Counter from "./components/Counter.tsx";
function App() {
  let text = " CLICK HERE ";
  let textAlert = "ALERT";
  let [showAlert, setShowAlert] = useState(false);
  const onClick = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div>
      <Button onClick={onClick} text={text}></Button>
      <Counter></Counter>
      <Alert2 show={showAlert} text={textAlert}></Alert2>
    </div>
  );
}
export default App;
