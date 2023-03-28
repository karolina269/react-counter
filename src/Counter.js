import { useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Step from "./components/Step";
import Display from "./components/Display";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);

  const [step, setStep] = useState(1);

  const updateStep = (event) => {
    setStep(parseInt(event.target.value));
  };

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + step);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} step={step} />
      <Step updateStep={updateStep} />
    </div>
  );
};

export default Counter;
