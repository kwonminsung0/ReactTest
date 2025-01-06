import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  //이벤트를 가져오기
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  //전체 데이터를 가져오기
  const data = useContext(DiaryStateContext);

  //id와 같은 diaryItem 들어간다. useEffect 마운트기능을 진행하고 입력한다.
  const [curDiaryItem, setCurDiaryItem] = useState();

  //마운트기능 마운트할때. id, data 변동사항이 있으면 함수를 실행한다.
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직
      onDelete(params.id);
      //뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"RED"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
