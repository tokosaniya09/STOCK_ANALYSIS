import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav >
      <img className="logo" src={logo} alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
