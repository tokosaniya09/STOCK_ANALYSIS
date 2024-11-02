import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav>
      <div className="navTop">
        <img className="logo" src={logo} alt="Logo" /> 
        <h1>Stock Trekker</h1>
      </div>

      <div className="navBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/stockinfo">Stock Info</Link>
      </div>
    </nav>
  );
}
