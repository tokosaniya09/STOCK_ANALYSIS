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
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/stockinfo">Stock Info</Link>
      </div>
    </nav>
  );
}
