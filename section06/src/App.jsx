import "./App.css";
import Viewer from "./components/viewer";
import Controller from "./components/controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section className="viewer">
        <Viewer count={count} />
      </section>
      <section className="controller">
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
