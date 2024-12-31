import "./App.css";
import Viewer from "./components/viewer";
import Controller from "./components/controller";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const calResult = () => {
    let sum = 0;
    let currentNum = "";
    let operator = "+";

    for (let i = 0; i <= input.length; i++) {
      const data = input[i];

      if (data >= 0 && data <= 9) {
        currentNum += data;
      }
      if (
        (data === "+" ||
          data === "-" ||
          data === "*" ||
          data === "/" ||
          i === input.length) &&
        currentNum !== ""
      ) {
        const num = parseFloat(currentNum);

        if (operator === "*") {
          sum *= num;
        } else if (operator === "/") {
          sum /= num;
        } else if (operator === "+") {
          sum += num;
        } else if (operator === "-") {
          sum -= num;
        }

        operator = data;
        currentNum = "";
      }
    }
    setResult(sum);
  };

  const onClickButton = (value) => {
    if (value === "reset") {
      setInput("");
      setResult(0);
    } else if (value === "=") {
      calResult();
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="app">
      <h1>Simple Calculator</h1>
      <section className="viewer">
        <Viewer input={input} result={result} />
      </section>
      <section className="controller">
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
