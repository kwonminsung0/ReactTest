import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>게시판 📋</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
