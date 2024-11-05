import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StockInfo from "./components/StockInfo";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Developers from "./components/Developers";


function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <main className="main_container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stockinfo" element={<StockInfo />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/developers" element={<Developers />} /> 
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
