import "./ListItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const ListItem = ({ id, isDone, content, date }) => {
  console.log(`ListItem ${id}`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickItem = () => {
    onDelete(id);
  };

  return (
    <div className="listItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onClickItem}>삭제</button>
    </div>
  );
};

//고차컴포넌트 (HOC : Higher Order Component)
// export default memo(ListItem, (prevProps, nextProps) => {
//   //memo 이전값과 현재값을 비교한다.
//   //return false (리랜더링을 발생한다.)
//   //return true (리랜더링을 발생하지 않는다.)
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(ListItem);
