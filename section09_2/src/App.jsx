import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";

//가상의 데이터(마운트:서버에서 데이터를 가져온다.(Ajax json))
const mockData = [
  {
    id: 0,
    isDone: false,
    name: "aaa",
    title: "게시물1",
    content: "리액트공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    name: "bbb",
    title: "게시물2",
    content: "스프링부트공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    name: "ccc",
    title: "게시물3",
    content: "유튜브동영상 자바보면서 쉬기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [...state, action.data];
    case "CHECK":
      return state.map((item) => {
        return item.id === action.data
          ? { ...item, isDone: !item.isDone }
          : item;
      });
    case "DELETE":
      return state.filter((item) => {
        return item.id !== action.data;
      });
    case "UPDATE":
      return state.map((item) => {
        return item.id === action.data.id ? { ...item, ...action.data } : item;
      });
    default:
      return state;
  }
}

function App() {
  //const [todos, setTodos] = useState(mockData);
  const [boards, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //boards 추가할 레코드 처리하는 핸들러함수
  const onInsert = ({ name, title, content }) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        name,
        title,
        content,
        date: new Date().getTime(),
      },
    });
  };

  //boards 체크수정할 레코드 처리하는 핸들러함수
  const onCheck = (targetId) => {
    dispatch({
      type: "CHECK",
      data: targetId,
    });
  };

  //boards 삭제할 레코드 처리하는 핸들러함수
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  };

  //boards 내용 수정
  const onUpdate = (targetId, updateData) => {
    dispatch({
      type: "UPDATE",
      data: { targetId, ...updateData },
    });
  };

  return (
    <div className="app">
      <Header />
      <Editor onInsert={onInsert} onUpdate={onUpdate} />
      <List boards={boards} onCheck={onCheck} onDelete={onDelete} />
    </div>
  );
}

export default App;
