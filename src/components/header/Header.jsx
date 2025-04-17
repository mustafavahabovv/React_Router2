import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/favorite" style={{ marginRight: "15px", color: "white" }}>Favorite</Link>
      <Link to="/basket" style={{ color: "white" }}>Basket</Link>
    </nav>
  );
};

export default Header;
