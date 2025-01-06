import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onInsert }) => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const inputRef = useRef([]);
  inputRef.current = [];

  const onSubmit = () => {
    if (name === "") {
      alert("이름을 입력해주세요.");
      inputRef.current[0]?.focus();
      return;
    }
    if (title === "") {
      alert("제목을 입력해주세요.");
      inputRef.current[1]?.focus();
      return;
    }
    if (content === "") {
      alert("내용을 입력해주세요.");
      inputRef.current[2]?.focus();
      return;
    }
    onInsert({ name, title, content });
    setName("");
    setTitle("");
    setContent("");

    inputRef.current[0]?.focus();
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e, index) => {
    if (e.keyCode === 13) {
      const nextIndex = index + 1;
      if (nextIndex < inputRef.current.length) {
        inputRef.current[nextIndex]?.focus();
      } else {
        onSubmit();
      }
    }
  };

  return (
    <>
      <div className="editor">
        <input
          className="name"
          value={name}
          ref={(element) => (inputRef.current[0] = element)}
          type="text"
          onChange={onChangeName}
          onKeyDown={(e) => onKeyDown(e, 0)}
          placeholder="작성자"
        />
        <input
          className="title"
          value={title}
          ref={(element) => (inputRef.current[1] = element)}
          type="text"
          onChange={onChangeTitle}
          onKeyDown={(e) => onKeyDown(e, 1)}
          placeholder="제목"
        />
        <textarea
          className="content"
          value={content}
          ref={(element) => (inputRef.current[2] = element)}
          onChange={onChangeContent}
          onKeyDown={(e) => onKeyDown(e, 3)}
          placeholder="내용"
        />
      </div>
      <div className="btn">
        <button onClick={onSubmit}>추가</button>
      </div>
    </>
  );
};

export default Editor;
