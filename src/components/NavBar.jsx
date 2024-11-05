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
        <Link className="link" to="/developers">Developers Page</Link>
      </div>
    </nav>
  );
}

// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function NavBar() {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//         <img className="w-12 h-12" src={logo} alt="Logo" />
//         <h1 className="text-xl font-bold">Stock Trekker</h1>
//       </div>

//       <div className="max-w-7xl mx-auto flex justify-center space-x-4 p-2">
//         <Link className="link text-gray-700 hover:text-blue-500" to="/">Home</Link>
//         <Link className="link text-gray-700 hover:text-blue-500" to="/about">About</Link>
//         <Link className="link text-gray-700 hover:text-blue-500" to="/stockinfo">Stock Info</Link>
//       </div>
//     </nav>
//   );
// }

