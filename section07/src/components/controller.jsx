import "./controller.css";

const Controller = ({ onClickButton }) => {
  const onClickValue = (e) => {
    onClickButton(Number(e.target.value));
  };
  return (
    <div>
      <button onClick={onClickValue} value="-1">
        -1
      </button>
      <button onClick={onClickValue} value="-10">
        -10
      </button>
      <button onClick={onClickValue} value="-100">
        -100
      </button>
      <button onClick={onClickValue} value="100">
        +100
      </button>
      <button onClick={onClickValue} value="10">
        +10
      </button>
      <button onClick={onClickValue} value="1">
        +1
      </button>
    </div>
  );
};

export default Controller;
