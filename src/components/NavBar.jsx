import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

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
        <div>
            <SignedOut>
                <SignInButton>
                <button className="button">
                    SignUp
                </button>
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
      </nav>
  );
}