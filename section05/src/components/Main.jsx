import "./Main.css";

function Main() {
  const number = 9;
  const obj = { name: "kdj", age: 10, isLogin: true };

  return (
    <>
      {obj.isLogin === false ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div className="logout">로그인</div>
      )}
    </>
  );
}

export default Main;
