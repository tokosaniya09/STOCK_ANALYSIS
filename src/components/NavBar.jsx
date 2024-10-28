// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function NavBar() {
//   return (
//     <nav >
//       <img className="logo" src={logo} alt="Logo" />
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/stockinfo">Stock Info</Link>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-blue-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-10 w-10 mr-3" src={logo} alt="Logo" />
        <span className="text-white text-xl font-bold">Stock Tracker</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/stockinfo" className="text-white hover:text-gray-300">Stock Info</Link>
      </div>
    </nav>
  );
}

