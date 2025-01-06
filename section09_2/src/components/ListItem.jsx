import "./ListItem.css";

const ListItem = ({
  id,
  isDone,
  name,
  title,
  content,
  date,
  onCheck,
  onDelete,
  onUpdate,
}) => {
  const onChangeCheckBox = () => {
    onCheck(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  const onClickUpdate = () => {
    onUpdate(id);
  };

  return (
    <div className="listItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <p className="name">작성자: {name}</p>
      <p className="title">제목: {title}</p>
      <p className="content">내용: {content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onClickUpdate}>수정</button>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default ListItem;
