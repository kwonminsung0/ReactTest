import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

//가상의 데이터(마운트:서버에서 데이터를 가져온다.(Ajax json))
const mockDate = [
  {
    id: 0,
    isDone: false,
    content: "리액트공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스프링부트공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "유튜브동영상 자바보면서 쉬기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);

  //todos 추가할 레코드 처리하는 핸들러함수
  const onInsert = (data) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: data,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  //todos 수정할 레코드 처리하는 핸들러함수
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  //todos 삭제할 레코드 처리하는 핸들러함수
  const onDelete = (targetId) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== targetId;
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <Editor onInsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
