import "./App.css";
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
  );
}

export default App;