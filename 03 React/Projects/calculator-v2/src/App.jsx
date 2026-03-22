import './App.css';
import Display from './components/Display.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';
import AppName from './components/AppName.jsx';
import { useState } from "react";

function App() {

  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } 
    else if (buttonText === "Del") {
      setCalVal(calVal.slice(0, -1));
    }
    else if (buttonText === "=") {
      const result = eval(calVal).toString();
      setCalVal(result);
    } 
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <AppName />
      <div id="calculator">
        <Display calVal={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;