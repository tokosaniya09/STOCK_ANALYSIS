// import "./App.css";
// import { Outlet, BrowserRouter as Router, Routes, Route  } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import StockInfo from "./components/StockInfo"; 
// import Home from "./pages/HomePage"; 

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <NavBar />
//         <main className="main_container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/stockinfo" element={<StockInfo />} />
//           <Route path="*" element={<Outlet />} />
//         </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StockInfo from "./components/StockInfo"; 
import Home from "./pages/HomePage"; 

function App() {
  return (
      <div className="App">
        <div className="container">
          <NavBar />
          <main className="main_container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stockinfo" element={<StockInfo />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;



{/* <div className="App">
<div class="relative h-full w-full bg-slate-950">
  <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
    <NavBar />
    <main className="main_container">
      <Outlet />
    </main>
  </div>
</div>
</div> */}