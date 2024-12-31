import "./controller.css";

const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button onClick={() => onClickButton("1")}>1</button>
      <button onClick={() => onClickButton("2")}>2</button>
      <button onClick={() => onClickButton("3")}>3</button>
      <br />
      <button onClick={() => onClickButton("4")}>4</button>
      <button onClick={() => onClickButton("5")}>5</button>
      <button onClick={() => onClickButton("6")}>6</button>
      <br />
      <button onClick={() => onClickButton("7")}>7</button>
      <button onClick={() => onClickButton("8")}>8</button>
      <button onClick={() => onClickButton("9")}>9</button>
      <button onClick={() => onClickButton("0")}>0</button>
      <br />

      <button onClick={() => onClickButton("+")}>+</button>
      <button onClick={() => onClickButton("-")}>-</button>
      <button onClick={() => onClickButton("*")}>*</button>
      <button onClick={() => onClickButton("/")}>/</button>

      <button onClick={() => onClickButton("=")}>=</button>
      <button onClick={() => onClickButton("reset")}>reset</button>
    </div>
  );
};

export default Controller;
