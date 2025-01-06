import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ boards, onCheck, onDelete, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //useState 해당되는 서치내용을 바꾸면 List 리랜더링이 발생한다.
  //이때 필터링을 진행한다.
  const getFilterItem = () => {
    if (search === "") {
      return boards;
    }
    return boards.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterItem = getFilterItem();

  return (
    <div className="list">
      <h4>게시판리스트</h4>
      <input
        value={search}
        type="text"
        onChange={onChangeSearch}
        placeholder="제목 검색하기"
      />
      <div className="title">
        {filterItem.map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              onCheck={onCheck}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
