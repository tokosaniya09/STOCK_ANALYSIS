import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div class="container">
        <NavBar />
        <main className="main_container">
          <Outlet />
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