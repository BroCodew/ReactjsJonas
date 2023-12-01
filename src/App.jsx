import "./app.css";
import { useState } from "react";

/* eslint-disable no-unused-vars */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [valueButton, setValueButton] = useState();
  const [test, setTest] = useState({ name: "Jonas" });

  const handlePrevious = (e) => {
    console.log("e", e.target);
    setValueButton(1);
    setTest({ name: "Ban" });

    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = (e) => {
    console.log("e", e.target);
    setValueButton(2);
    setTest({ name: "An" });
    if (step < 3) {
      setStep(step + 1);
    }
  };

  console.log("test", test);
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step === 1 ? "active" : ""}>1</div>
          <div className={step === 2 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">{messages[step - 1]}</p>
        <div className="buttons">
          <button
            className={valueButton === 1 ? "activeButton" : ""}
            onClick={(e) => handlePrevious(e)}
          >
            Previous
          </button>
          <button
            className={valueButton === 2 ? "activeButton" : ""}
            onClick={(e) => handleNext(e)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
