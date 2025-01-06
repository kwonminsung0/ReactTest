import "./App.css";
import {
  Routes,
  Route,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { useReducer, useRef, createContext } from "react";

//목업데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-02-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-02-18").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-12-07").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

//useState => useReducer
// reducer return 하게 되면, setState
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  //쿼리스트링 이벤트 페이지 요청
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new?value=hello2");
  };

  return (
    <>
      {/* 동적라우팅 (쿼리스트링) */}
      <Link to="/new?value=hello">new(Query)</Link>
      <button onClick={onClickButton}>
        쿼리스트링으로 이벤트로 페이지 요청하기
      </button>
      <hr />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new/*" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
