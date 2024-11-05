import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; 
import { Outlet } from "react-router-dom";

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
    </div>
  );
}

export default App;
