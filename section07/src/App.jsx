import "./App.css";
import Viewer from "./components/viewer";
import Controller from "./components/controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  //마운트될때, 모든 스테이트가 바뀔때 업데이트
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true;
      console.log(`(Mount)count: `);
      return;
    } else {
      console.log(`(Update)count: ${count} ${input}`);
    }
  });
  const onClickButton = (value) => {
    setCount(count + value);
  };
  //input 변화된 값 setting
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <div>
          <input type="text" value={input} onChange={onChangeInput} />
        </div>
      </section>
      <section className="viewer">
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section className="controller">
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
