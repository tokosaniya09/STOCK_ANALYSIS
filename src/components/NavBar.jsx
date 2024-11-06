import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useState } from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav>
      <div className="navTop">
        <img className="logo" src={logo} alt="Logo" /> 
        <h1>Stock Trekker</h1>
        <i
          className="fa-solid fa-bars hamburger-icon"
          onClick={toggleNav}
          style={{ display: isNavOpen ? "none" : "block" }}
        ></i>
      </div>

      <div className={`navBar ${isNavOpen ? "open" : ""}`}>
        <i 
          className="fa-solid fa-times close-icon" 
          onClick={toggleNav}
        ></i>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/stockinfo">Stock Info</Link>
        <Link className="link" to="/developers">Developers Page</Link>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="button">SignUp</button>
            </SignInButton>
          </SignedOut>
        </div>
        <div>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  rootBox: "w-full h-full flex justify-center items-center",
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
