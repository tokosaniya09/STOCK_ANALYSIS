import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StockInfo from "./components/StockInfo"; 
import Home from "./pages/HomePage";
import Footer from "./components/Footer"; 
import { Outlet } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { ClerkProvider } from '@clerk/clerk-react';

function App() {
  return (
      <div className="App">
        <div className="container">
          <NavBar />
          <main className="main_container">
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
  );
}

export default App;