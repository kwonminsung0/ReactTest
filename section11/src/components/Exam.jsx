import { useReducer } from "react";
import "./Exam.css";

function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + action.data;
    case "MINUS":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "PLUS",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "MINUS",
      data: 1,
    });
  };

  return (
    <div className="exam">
      <h1>{state}</h1>
      <button onClick={onClickPlus}>PLUS</button>
      <button onClick={onClickMinus}>MINUS</button>
    </div>
  );
};

export default Exam;
