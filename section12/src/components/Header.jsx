import "./Header.css";

const Header = ({ title, left, right }) => {
  return (
    <header className="header">
      <div>{left}</div>
      <div className="title">{title}</div>
      <div>{right}</div>
    </header>
  );
};

export default Header;
