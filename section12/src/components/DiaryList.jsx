import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  //props 넘어온 데이터를 정렬한다.
  const getSortData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  //정렬된 데이터
  const sortedData = getSortData();
  return (
    <div className="diaryList">
      <div className="menubar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>역순</option>
        </select>
        <Button
          onClick={() => {
            nav(`/new`);
          }}
          text={"새 일기쓰기"}
          type={"GREEN"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => {
          return <DiaryItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
